<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Landlord extends Authenticatable

{

    use HasFactory,SoftDeletes,HasRoles;
    

    protected $fillable = ['landlord_name', 'email', 'phone', 'landlord_id','password'];
    protected $dates = ['deleted_at']; // Add this line to make 'deleted_at' column a Carbon instance


    
    public function units()
    
    {
        return $this->hasManyThrough(Unit::class, Property::class);
    }
    public function properties()    {
        return $this->hasMany(Property::class);
    }
}
