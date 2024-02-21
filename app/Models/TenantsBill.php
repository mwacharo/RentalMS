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
}
