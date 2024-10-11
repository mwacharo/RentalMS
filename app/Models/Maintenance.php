<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class maintenance extends Model
{
    use HasFactory;



    // Define the table associated with the model
    // protected $table = 'maintenance_requests'; // Assuming your table is named maintenance_requests

    // Specify the attributes that are mass assignable
    protected $fillable = [
        'tenant_id',
        'property_id',
        '
        ',
        'description',
        'request_date',
        'status',
        'priority',
        'created_by',
        'updated_by',
    ];

    // Define relationships

    // Maintenance belongs to a tenant
    public function tenant()
    {
        return $this->belongsTo(Tenant::class);
    }

    // Maintenance belongs to a unit
    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }


    public function property()
    {
        return $this->belongsTo(Property::class);
    }

    // Maintenance can have many images or files associated (optional)
    // public function files()
    // {
    //     return $this->hasMany(MaintenanceFile::class);
    // }

    // Maintenance may have a user assigned as a resolver or creator
    // public function user()
    // {
    //     return $this->belongsTo(User::class, 'created_by');
    // }
}
