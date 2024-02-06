<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventRandomDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 100; $i++) {
            Event::create([
                'name' => $faker->name(),
                'eventDate' => $faker->unique()->dateTimeInInterval($startDate = '-7 days', $interval = '+ 5 days', $timezone = null),
                'amount' => $faker->numberBetween($min = 100, $max = 100000),
                'user_id' => rand(1,3),
                'type_id' => rand(1,5)
            ]);
        }
    }
}
