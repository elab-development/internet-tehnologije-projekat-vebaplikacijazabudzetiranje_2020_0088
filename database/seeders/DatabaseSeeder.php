<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\TypeEvent;
use App\Models\Event;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //User::truncate();
        //TypeEvent::truncate();
        //\App\Models\User::factory(10)->create();

        $user1=User::factory()->create([
            'username' => 'Test User',
            'email' => 'test@example.com',
            'password'=>'pass',
            'role'=>'user'
        ]);
        $user2=User::factory()->create([
            'username' => 'andjelkaandric',
            'email' => 'andja@gmail.com',
            'password'=>'pass',
            'role'=>'admin'
        ]);
        $user3=User::factory()->create([
            'username' => 'sofijaarsic',
            'email' => 'sofija@gmail.com',
            'password'=>'pass',
            'role'=>'user'
        ]);
        $type1=TypeEvent::factory()->create([
            'name' => 'Entertainment',
        ]);
        $type2=TypeEvent::factory()->create([
            'name' => 'Travel',
        ]);
        $type3=TypeEvent::factory()->create([
            'name' => 'Food and drink',
        ]);
        $type4=TypeEvent::factory()->create([
            'name' => 'Transportation',
        ]);
        $type5=TypeEvent::factory()->create([
            'name' => 'Uncategorized',
        ]);

        Event::factory()->create([
            'name'=>'Coffee',
            'amount'=>500,
            'user_id'=>$user1->id,
            'type_id'=>$type3->id
        ]);
        Event::factory()->create([
            'name'=>'Belgrade',
            'amount'=>10000,
            'user_id'=>$user3->id,
            'type_id'=>$type2->id
        ]);


    }
}
