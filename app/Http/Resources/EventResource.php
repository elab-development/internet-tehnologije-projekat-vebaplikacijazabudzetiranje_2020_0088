<?php

namespace App\Http\Resources;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
       // return parent::toArray($request);
       return [

    
    
        'id' => $this->resource->id,
       'name' => $this->resource->name,
       //
       //'datePaid'=> $this->resource->datePaid,
       
       'amount'=>$this->resource->amount,
       'user'=> new UserResource($this->resource->user),
       'type'=>new TypeEventResource($this->resource->type),
       'eventDate' => $this->resource->eventDate,


       ];
    }
}
