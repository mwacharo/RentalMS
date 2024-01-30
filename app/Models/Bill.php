<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    use HasFactory;

   

    // protected $fillable = ['tenant_id','water_bill', 'internet_bill', 'waste_collection', 'rent'];

    // public function bills()
    // {
    //     return $this->belongsTo(Tenant::class);
    // }

     // Change from tenant_id to unit_id or property_id
     protected $fillable = ['unit_id', 'water_bill', 'internet_bill', 'waste_collection', 'rent','deposit'];

     // Update relationship method
     public function unit()
     {
         return $this->belongsTo(Unit::class);
     }
    
}
