<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);


        //  $this->call(LandlordSeeder::class);
        // $this->call(PropertySeeder::class);
        // $this->call(UnitSeeder::class);
        $this->call(TenantSeeder::class);
    //     $this->call(BillSeeder::class);
    //     $this->call(InvoiceSeeder::class);
    //     $this->call(TransactionSeeder::class);
    }
}
