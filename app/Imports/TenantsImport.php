<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use App\Models\Tenant;

class TenantsImport implements ToCollection
{
    private $propertyId;

    public function __construct($propertyId)
    {
        $this->propertyId = $propertyId;
    }

    /**
     * @param Collection $rows
     */
    public function collection(Collection $rows)
    {
        foreach ($rows as $key => $row) {
            // Skip the first row (headers)
            if ($key === 0) {
                continue;
            }

            Tenant::firstOrCreate([
                'tenant_name' => $row[0],

                'email' => $row[1],
                'phone' => $row[2],



                'property_id' => $this->propertyId,
                // 'unit_id' => $row[3], 

                // 'national_id' => $this->propertyId,
            ]);
        }
    }
}
