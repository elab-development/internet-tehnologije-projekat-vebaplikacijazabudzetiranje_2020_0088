<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TypeEvent;
use App\Http\Resources\TypeEventResource;

class TypeEventController extends Controller
{
    //
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $types = TypeEvent::all();
        return $types;
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
    public function show($type_id)
    {
        $type = TypeEvent::find($type_id);
        if(is_null($type)){
                  return response()->json('data not found',404);
        }
        return response()->json($type);
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
