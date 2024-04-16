<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vacant extends Model
{
    use HasFactory;
    protected $fillable = ['property_id','description','rent','number_of_units','images'];


    public function property()
    {

        return $this->belongsTo(Property::class);
    }
}
