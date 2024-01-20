<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable=[
        'amount',
        'name',
        'user_id',
        'type_id'
    ];

    public function type()
    {
        return $this->belongsTo(TypeEvent::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
