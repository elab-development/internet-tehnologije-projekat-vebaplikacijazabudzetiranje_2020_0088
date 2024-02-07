<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendGridTestEmail;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = $request->user();
        
        if($user->role != 'admin'){
            return response()->json([
                'message' => 'Nemate pristup ovoj ruti',
            ]);
        }
        $users = User::all();
        return response()->json([
            'data' => UserResource::collection($users),
            'message' => 'Uspesno su vraceni svi useri',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }


    public function show(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if(is_null($user)){
                  return response()->json('data not found',404);
                }
        return response()->json(['data'=>$user]);

       
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
        $user = $request->user();
        
        $validator = Validator::make($request->all(),[
            'username'=> 'required|string|max:255',
        ]);
        
        if($validator->fails()){
            return response()->json($validator->errors());
        }

        $user->username=$request->username;
        $user->save();

        return response()->json(['data'=>new UserResource($user)]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }

    public function sendEmail()
    {
        Mail::to('arsic2001sofija@gmail.com')->send(new SendGridTestEmail());

        return "Email sent successfully!";
    }
}
