<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CustomerTransation>
 */
class CustomerTransationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'amount' => fake()->numberBetween(100, 10000),
            'type' => fake()->randomElement(['CREDIT', 'DUE']),
            'customer_id' => fn() => Customer::factory()->create()->id,
            'user_id' => fn() => User::factory()->create()->id()
        ];
    }
}
