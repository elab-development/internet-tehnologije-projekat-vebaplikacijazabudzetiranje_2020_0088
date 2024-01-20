<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventParticipant extends Model
{
    use HasFactory;
    protected $table = 'event_participants';

    protected $fillable = [
        'event_id',
        'user_id',
    ];
    
    public function events()
    {
        return $this->belongsTo(Event::class);
    }

    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
