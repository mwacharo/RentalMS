<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    use HasFactory;

    protected $fillable = ['property_id', 'unit_id', 'unit_number', 'unit_status', 'deposit','deposit_status', 'rent', 'tenant_id'];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }

    // public function tenant()
    // {
    //     return $this->hasMany(Tenant::class);
    // }
    public function tenant()
    {
        return $this->belongsTo(Tenant::class);
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }


    public function bills()
    {
        return $this->hasMany(Bill::class);
    }
    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }

//     public function leaseAgreements()
//     {
//         return $this->hasMany(LeaseAgreement::class);
//     }
 }
