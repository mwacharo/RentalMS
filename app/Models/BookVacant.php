<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookVacant extends Model
{
    use HasFactory;

     // Specify the table if it's not the pluralized form of model name
     protected $table = 'book_vacants';

     // Fillable fields for mass assignment
     protected $fillable = [
        'vacant_id',
         'property_id', // Assuming it's related to the Vacant model
         'tenant_id', // Assuming a user books the vacant
         'date', // The date of booking
         'status', // Status of the booking
         // Add other fields as necessary
     ];
 
     // Relationship with Vacant model
     public function property()
     {
         return $this->belongsTo(Property::class);
     }
 
     // Relationship with User model, if applicable
     public function tenant()
     {
         return $this->belongsTo(Tenant::class);
     }
}
