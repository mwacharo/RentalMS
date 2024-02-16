<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    use HasFactory;

    protected $fillable = ['tenant_name', 'email', 'phone','unit_id','property_id','national_id'];

   

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }

    public function units()
    {
        
        return $this->hasMany(Unit::class);
    }
    
    public function bills()
    {
        
        return $this->hasMany(Bill::class);
    }
    
}
