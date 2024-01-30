<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tenant; // Update the namespace if necessary

class TenantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Sample data to be seeded
        $tenantsData = [
            [
                'tenant_name' => 'John Doe',
                'email' => 'john.doe@example.com',
                'phone' => '1234567890',
                'unit_id' => '4',
                'property_id' => '1',
            ],
            // Add more sample data as needed
        ];

        // Seed the tenants data
        foreach ($tenantsData as $data) {
            Tenant::create($data);
        }
    }
}
