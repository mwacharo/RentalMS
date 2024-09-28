<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;


class Tenant extends Authenticatable
{
    use HasFactory, HasRoles;


    protected $fillable = ['tenant_name', 'email', 'password', 'phone', 'unit_id', 'property_id', 'national_id', 'agreement'];


    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];


    protected $appends = [
        'is_tenant',
        'is_user',
        'is_landlord',
        'is_company'
    ];

    public function getIsTenantAttribute()
    {

        return true;
    }

    public function getIsUserAttribute()
    {

        return false;
    }

    public function getIsCompanyAttribute()
    {

        return false;
    }
    public function getIsLandlordAttribute()
    {

        return false;
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }

    public function unit()
    {

        return $this->belongsTo(Unit::class);
    }


    public function property()
    {
        return $this->belongsTo(Property::class);
    }

    public function bills()
    {
        return $this->belongsToMany(Bill::class, 'tenants_bills')->using(TenantsBill::class)->withPivot('amount');
    }
}
