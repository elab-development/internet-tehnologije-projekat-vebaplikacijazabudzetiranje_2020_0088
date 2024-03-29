<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Resources\EventResource;
use App\Http\Resources\EventCollection;
use App\Models\Event;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class EventController extends Controller
{
    //
     /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        $user = $request->user();
        
        if($user->role != 'admin'){
            $events = Event::where(['user_id' => $user->id])->get();
            // $events = Event::where(['type_id',$type_id) && ('user_id',$user->id)])->get();
             return response()->json([
                 'data' => EventResource::collection($events),
                 'message' => 'Successfully returned all events by type',
             ]);
        }
        else{
        $events = Event::all();
        
        return response()->json(['data' =>new EventCollection($events)]);}
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
        $user = $request->user();
        
        $validator = Validator::make($request->all(),[
            'name'=> 'required|string|max:255',
            'amount'=>'required',
            
            'type_id'=>'required|numeric'
        ]);
        
        if($validator->fails()){
            return response()->json($validator->errors());
        }


        $event=Event::create([
            'name'=> $request->name,
            'amount'=> $request->amount,
            'user_id'=>$user->id,
            'type_id'=> $request->type_id
        ]);

        return response()->json(['message ' =>'Event is created successfully.','data'=>new EventResource($event)]);
    }

    /**
     * Display the specified resource.
     */

    public function show(Event $event)
    {
        
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
    public function update(Request $request, Event $event)
    {
        //
        $user = $request->user();
        
        if($user->role != 'admin'){
            return response()->json([
                'message' => 'Nemate pristup ovoj ruti',
            ]);
        }
        $validator = Validator::make($request->all(),[
            'name'=> 'required|string|max:255',
            'amount'=>'required',
            'type_id'=>'required|numeric'
        ]);
        
        if($validator->fails()){
            return response()->json($validator->errors());
        }

        
        $event->name=$request->name;
        $event->amount=$request->amount;
        $event->type_id=$request->type_id;
        $event->save();

        return response()->json(['Event is updated successfully.',new EventResource($event)]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Event $event)
    {
        //
        try{
        $user = $request->user();

        $event->participants()->delete();
        $event->delete();
        return response()->json(['Event is deleted successfully.']);
        }catch(\Exception$e){
            return response()->json(['Error'=>$e->getMessage()],500);
        }

    }


    public function getEventsByType(Request $request , $type_id)
    {
        $sortDirection = $request->input('sort_direction', 'desc');
        $user = $request->user();
        if($user->role != 'admin'){
           

            $events = DB::table('events as e')
            ->where('e.type_id', $type_id)
            ->where('e.user_id', $user->id)
            ->orderBy('e.amount', $sortDirection)
            ->get();
            return response()->json([
           
                'data' => EventResource::collection($events),
                'message' => 'Successfully returned all events by type',
              ],200);
            
        }
        $events = DB::table('events as e')
        ->where('e.type_id', $type_id)
        ->orderBy('e.amount', $sortDirection)
        ->get();
        return response()->json([
       
            'data' => EventResource::collection($events),
            'message' => 'Successfully returned all events by type',
          ],200);


    }
    public function eventsByTypeChart(Request $request)
    {
        $user = $request->user();
        if($user->role == 'admin'){  
        $events = DB::table('events as e')
            ->select(DB::raw('te.name, COUNT(*) as numberOfEvents'))
            ->join('type_events as te', 'e.type_id', '=', 'te.id')
            ->groupBy('te.name')
            ->get();

        return response()->json([
            'poruka' => 'Uspesno ucitani eventovi',
            'podaci' => $events,
        ], 200);}
        else{
            return response()->json([
                'message' => 'Nemate pristup ovoj ruti',
            ]);
        }
    }

    public function paginateEvents(Request $request)
    {
        $user = $request->user();
        
        if($user->role != 'admin'){
            return response()->json([
                'message' => 'Nemate pristup ovoj ruti',
            ]);
        }
        $events = Event::paginate($request->per_page);
        return response()->json([
            'data' => EventResource::collection($events),
            'message' => 'Successfully returned all events',
        ]);
    }
    
    public function filterEvents(Request $request)
    {
        $dateFrom = $request->dateFrom;
        $dateTo = $request->dateTo;
        $type_id=$request->type_id;
        $user_id=$request->user_id;

        $events = Event::where('eventDate', '>=', $dateFrom)
            ->where('eventDate', '<=', $dateTo)
            ->where('type_id',$type_id)
            ->where('user_id',$user_id)
            ->get();
        return response()->json([
            'data' => EventResource::collection($events),
            'message' => 'Successfully returned all events',
        ]);
    }

    public function randomUser()
    {
        $apiUrl = 'https://randomuser.me/api/';

        $client = new \GuzzleHttp\Client();

        $response = $client->request('GET', $apiUrl);

        return response()->json([
            'data' => json_decode($response->getBody()),
            'message' => 'Successfully returned random user',
        ]);

    }

    public function eventsByUser(Request $request)
    {

        $user = $request->user();
        if($user->role == 'admin'){  
        $events = DB::table('events as e')
            ->select(DB::raw('u.username, COUNT(*) as numberOfEvents'))
            ->join('users as u', 'e.user_id', '=', 'u.id')
            ->groupBy('u.username')
            ->get();

        return response()->json([
            'poruka' => 'Uspesno ucitani eventovi',
            'podaci' => $events,
        ], 200);
    }
        else{
            return response()->json([
                'message' => 'Nemate pristup ovoj ruti',
            ]);
        }
    }
}
