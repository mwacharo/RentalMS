<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;



    protected $fillable = [
        //  'bill_id', 
        'unit_id', 'property_id', 'total_amount', 'due_date', 'status', 'issued_at', 'commission'
    ];

    public function unit()
    {
        return $this->belongsTo(Unit::class, 'unit_id');
    }
    public function tenant()
    {
        return $this->belongsTo(Tenant::class, 'tenant_id');
    }

    public function bills()
    {
        // return $this->belongsToMany(Bill::class, 'bill_invoices')->withPivot('amount');

        return $this->belongsToMany(Bill::class, 'bill_invoices')
            ->using(BillInvoice::class)
            ->withPivot('amount');
    }

    // New relationship with Property
    public function property()
    {
        return $this->belongsTo(Property::class);
    }

    // public function getCommissionAttribute($value) {
    //     return $this->attributes['total_amount']  * $value / 100;
    // }
}
