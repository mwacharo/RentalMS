<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;
    // protected $fillable = ['tenant_id', 'unit_id','invoice_id', 'amount', 'paid_at','payment_method',''];

 
    protected $fillable = ['transaction_type', 'trans_id', 'trans_time','trans_amount', 'transaction_type', 'status'];

    public function tenant()
    {
        return $this->belongsTo(Tenant::class);
    }

    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }

    // If you decide to link Transactions directly to a Bill or a Unit
    // public function bill()
    // {
    //     return $this->belongsTo(Bill::class);
    // }

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

}

