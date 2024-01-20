<?php

namespace App\Http\Resources;

use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EventParticipantResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $user = User::find($this->user_id);
        $event = Event::find($this->event_id);
        
        return [
            'id' => $this->id,
            'event' => new EventResource($event),
            'user' => new UserResource($user),
        ];
        return parent::toArray($request);
    }
}
