<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;


class AuthController extends Controller
{
    //
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
            return response()->json(['success'=>false,'message'=>'Unauthorized'],401);
        }
        $user=User::where('email',$request['email'])->firstOrFail();
        $token=$user->createToken('auth_token')->plainTextToken;

        return response()->json(['success'=>true,
        'message'=>'Hello '. $user->username . ' welcome to home!',
        'id'=>$user->id,
        'email'=>$user->email,
        'username'=>$user->username,
        'role'=>$user->role,
        'access_token'=>$token,'token_type'=>'Bearer']);
    }

    function logout(Request $request) {
        $request->user()->tokens()->delete();
        return [
            'message'=>'You have successfully logged out.'];
    }

    
    
}
