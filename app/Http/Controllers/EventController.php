<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\EventResource;
use App\Http\Resources\EventCollection;
use App\Models\Event;
use Illuminate\Support\Facades\Validator;
class EventController extends Controller
{
    //
     /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $events = Event::all();
        //return EventResource::collection($events);
        return new EventCollection($events);
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
        $validator = Validator::make($request->all(),[
            'name'=> 'required|string|max:255',
            'amount'=>'required',
            'datePaid'=>'required',
            'user_id'=>'required',
            'type_id'=>'required'
        ]);
        
        if($validator->fails()){
            return response()->json($validator->errors());
        }

        $event=Event::create([
            'name'=> $request->name,
            'amount'=> $request->amount,
            'datePaid'=>convert_to_sql_date_format($request->datePaid),
            'user_id'=> $request->user_id,
            'type_id'=> $request->type_id
        ]);

        return response()->json(['Event is created successfully.',new EventResource($event)    ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        // $event = Event::find($event_id);
        // if(is_null($event))
        //           return response()->json('data not found',404);
        // return response()->json($event);
        return new EventResource($event);
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
        $event=Event::find($id);
        $event->name=$request->input('name');
        $event->amount=$request->input('amount');
        $event->datePaid=$request->input('datePaid');
        $event->user_id=$request->input('user_id'); 
        $event->type_id=$request->input('type_id');
        $event->update;

        return redirect('employe')->with('status','Event data Updates Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
