<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable=[
        'amount',
        'name'
    ];

    public function typeEvent()
    {
        return $this->belongsTo(TypeEvent::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
