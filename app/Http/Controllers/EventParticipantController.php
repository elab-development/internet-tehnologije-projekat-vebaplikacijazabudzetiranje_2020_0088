<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventParticipantResource;
use App\Models\EventParticipant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EventParticipantController extends Controller
{
    //index

    public function index()
    {
        $eventParticipants = EventParticipant::all();
        return response()->json([
            'data' => EventParticipantResource::collection($eventParticipants),
            'message' => 'All data returned successfully',
        ]);
    }
    
    //show
    
    public function show($eventParticipant_id)
    {
        $eventParticipant = EventParticipant::find($eventParticipant_id);
        if(is_null($eventParticipant)){
                  return response()->json('data not found',404);
                }
        return response()->json([
            'data' => new EventParticipantResource($eventParticipant),
            'message' => 'Data returned successfully',
        ]);
    }
    
    //store
    
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'user_id'=> 'required|numeric',
            'event_id'=>'required|numeric',
            'debt'=>'required'
        ]);
        
        if($validator->fails()){
            return response()->json([
                'data' => $validator->errors(),
                'message' => 'Validation error',
            ]);
        }
        
        $eventParticipant = EventParticipant::create([
            'user_id'=> $request->user_id,
            'event_id'=> $request->event_id,
            'debt'=>$request->debt
        ]);
        
        return response()->json([
            'data' => new EventParticipantResource($eventParticipant),
            'message' => 'Data created successfully',
        ]);
    }
    
    //update
    
    public function update(Request $request, EventParticipant $eventParticipant)
    {
        $validator = Validator::make($request->all(),[
            'user_id'=> 'required|numeric',
            'event_id'=>'required|numeric',
        ]);
        
        if($validator->fails()){
            return response()->json([
                'data' => $validator->errors(),
                'message' => 'Validation error',
            ]);
        }
        
        $eventParticipant->update([
            'user_id'=> $request->user_id,
            'event_id'=> $request->event_id,
        ]);
        
        return response()->json([
            'data' => new EventParticipantResource($eventParticipant),
            'message' => 'Data updated successfully',
        ]);
    }
    
    //destroy
    
    public function destroy($eventParticipant_id)
    {
        $eventParticipant = EventParticipant::find($eventParticipant_id);
        if(is_null($eventParticipant)){
                  return response()->json('data not found',404);
                }
        $eventParticipant->delete();
        return response()->json([
            'data' => null,
            'message' => 'Data deleted successfully',
        ]);
    }
}