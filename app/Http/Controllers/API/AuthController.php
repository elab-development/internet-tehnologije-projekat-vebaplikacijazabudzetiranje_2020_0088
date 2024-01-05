<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Models\PasswordReset;
use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Http\Resources\UserResource;
use Illuminate\Notifications\Notifiable;
use Illuminate\Notifications\Notification;
//use App\Http\Controllers\API\PasswordResetNotification;
use Illuminate\Auth\Notification\ResetPassword;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Support\Facades\Password;
class AuthController extends Controller
{
    //
    public function forgot(ForgotPasswordRequest $request): JsonResponse {

        $user= ($query = User::query());
        $user= $user->where($query->qualifyColumn('email'),$request->input('email'))->first();

        if(!$user || !$user->email){
            return response()->error('No record found.','Incorrect email address provided.',404);
        }

        $resetPasswordToken=str_pad(random_int(1,9999),4,'0',STR_PAD_LEFT);//PORAVNANJE


        if(!$userPassReset = PasswordReset::where('email',$user->email)->first()){

            PasswordReset::create([
                'email'=>$user->email,
                'token'=>$resetPasswordToken
            ]);

        }
        else{
            $userPassReset->update(['email'=>$user->email,'token'=>$resetPasswordToken]);      
       }
       $user->notify(
        new PasswordResetNotification($user,$resetPasswordToken)
       );
       return response()->json(['message'=>'Code has been sent to your email address']); 
    }

    public function reset(ResetPasswordRequest $request): JsonResponse{

        $attributes=$request->validated();
        $user=User::where('email',$attributes['email'])->first();

        if(!$user){
            return response()->error('No record found.','Incorrect email address provided.',404);
        }

        $resetRequest=PasswordReset::where('email',$user->email)->first();
        if(!$resetRequest || $resetRequest->token!=$request->token){
            return response()->error('An error occured.Please try again','Token mismatch.',400);
        }
        $user->fill(['password'=>Hash::make($attributes['password'])]);
        $user->save();

        $user->tokens()->delete();

        $resetRequest->delete();

        $token= $user->createToken('authtoken')->plainTextToken;

        $loginResponse = [
            'user'=>UserResource::make($user),
            'token'=>$token
        ];

        return response()->json(['message'=>'Password reset success',201]);



    }



    function register(Request $request){
        $validator=Validator::make($request->all(),[
            'username'=>'required|string|max:255',
            'email'=>'required|string|email|max:255',
            'password'=>'required|string|min:6',
            'role'=>'unrequired'
        ]);

        if($validator->fails()){
            return response()->json(['message'=>'Unsuccessfully registration'],401);
        }

        $user=User::create([
            'username'=>$request->username,
            'email'=>$request->email,
            'password'=>Hash::make($request->password),
            'role'=>'user'
        ]);

        $token=$user->createToken('auth_token')->plainTextToken;

        return response()->json(['user'=>$user,'access_token'=>$token,'token_type'=>'Bearer']);
    }

    public function login(Request $request) {
        if(!Auth::attempt($request->only('email','password'))){
            return response()->json(['message'=>'Unauthorized'],401);
        }
        $user=User::where('email',$request['email'])->firstOrFail();

        $token=$user->createToken('auth_token')->plainTextToken;

        return response()->json(['message'=>'Hello '. $user->username . ' welcome to home!','access_token'=>$token,'token_type'=>'Bearer']);
    }

    function logout(Request $request) {
        $request->user()->tokens()->delete();
        return [
            'message'=>'You have successfully logged out.'];
    }

    
    
}
