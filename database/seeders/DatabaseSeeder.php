<?php

namespace Database\Seeders;

use App\Models\CustomerTransation;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Customer;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::factory()->create([
            'email' => 'test@example.com',
            'password' => bcrypt('helloworld'),
        ]);

        $customers = Customer::factory()
            ->count(10)
            ->create(['user_id' => $user->id]);

        foreach ($customers as $customer) {
            CustomerTransation::factory()
                ->count(5)
                ->create([
                    'user_id' => $user->id,
                    'customer_id' => $customer->id,
                ]);
        }
    }
}
