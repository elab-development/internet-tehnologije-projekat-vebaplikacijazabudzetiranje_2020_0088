<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;

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

    /**
     * Display the specified resource.
     */
    // public function show($user_id)
    // {
    //     $user = User::find($user_id);
    //     if(is_null($user)){
    //               return response()->json('data not found',404);
    //             }
    //     return response()->json($user);
        
    // }
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

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
