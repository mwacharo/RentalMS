<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; // Add this line


class Landlord extends Model
{

    use HasFactory,SoftDeletes;
    

    protected $fillable = ['landlord_name', 'email', 'phone', 'landlord_id'];
    protected $dates = ['deleted_at']; // Add this line to make 'deleted_at' column a Carbon instance


    
    public function units()
    {
        return $this->hasManyThrough(Unit::class, Property::class);
    }
    // public function properties()    {
    //     return $this->hasMany(Property::class);
    // }
}
