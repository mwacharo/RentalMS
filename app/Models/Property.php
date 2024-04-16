<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Property extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = ['property_id','property_name','address','email','phone','website','description', 'landlord_id','number_of_units'];
    protected $dates = ['deleted_at']; // This line is added to track the deletion date


    public function landlord()
    {
        return $this->belongsTo(Landlord::class);
    }

    public function units()
    {
        return $this->hasMany(Unit::class);
    }
    
}
