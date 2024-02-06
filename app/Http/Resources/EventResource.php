<?php

namespace App\Http\Resources;
use Illuminate\Http\Request;
use App\Models\Event;
use App\Models\TypeEvent;
use App\Models\User;
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
        $user = User::find($this->user_id);
        $type=TypeEvent::find($this->type_id);
        return [
         'id' => $this->resource->id,
        'name' => $this->resource->name,
        
        'amount'=>$this->resource->amount,
        'user'=> new UserResource($user),
        'type'=>new TypeEventResource($type),
        'eventDate' => $this->resource->eventDate,
        ];
    }
}
