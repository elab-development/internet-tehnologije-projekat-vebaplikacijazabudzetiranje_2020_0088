<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\TypeEvent;
use App\Models\Event;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
                        'name'=>$this->faker->name(),
                        //'datePaid'=> now(),
                        'amount'=>$this->faker->numberBetween($min=1, $max=100000000),
                        'user_id'=>User::factory(),
                        'type_id'=>TypeEvent::factory()
        ];
    }
}
