<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class TenantsBill extends Pivot
{
    use HasFactory;

    protected $table = 'tenants_bills';

    protected $fillable = ['tenant_id', 'bill_id', 'amount'];


    public function bill ()
    {
     
        return $this->belongsTo(Bill::class);
    }

    public function tenant()
    {
     
        return $this->belongsTo(Tenant::class);
    }

    // tenant is related to unit through 
    //  public function unit()
//     {

//         return $this->belongsTo(Unit::class);
//     }

// how can I fetch  tenants_bills with unit

 }
