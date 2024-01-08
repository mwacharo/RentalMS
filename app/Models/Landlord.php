<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Landlord extends Model
{

    use HasFactory;

    protected $fillable = ['landlord_name', 'email', 'phone', 'landlord_id'];

    
    public function units()
    {
        return $this->hasManyThrough(Unit::class, Property::class);
    }
}
