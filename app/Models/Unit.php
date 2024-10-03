<?php

namespace App\Models;

use App\Models\Scopes\UnitScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Facades\Auth;


use Illuminate\Database\Eloquent\Builder;


class Unit extends Model
{
    use HasFactory;

    protected $fillable = ['property_id', 
    // 'unit_id',
     'unit_number', 'unit_status', 'deposit', 'deposit_status', 'rent', 'tenant_id'];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }

    // public function tenant()
    // {
    //     return $this->hasMany(Tenant::class);
    // }
    public function tenant()
    {
        return $this->belongsTo(Tenant::class);
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }


    public function bills()
    {
        return $this->hasMany(Bill::class);
    }
    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }

    protected static function booted(): void
    {
        static::addGlobalScope('byLandlord', function (Builder $builder) {
            if (Auth::guard('landlord')->check()) {
                // Get the authenticated landlord
                $landlord = Auth::guard('landlord')->user();

                // Only include units that belong to properties owned by the landlord
                $builder->whereHas('property', function ($query) use ($landlord) {
                    $query->where('landlord_id', $landlord->id);
                });
            }
            if (Auth::guard('tenant')->check()) {

                                // Only include units that belong belong to tenant
             
                    $builder->where('tenant_id',  Auth::guard('tenant')->id());
            
            }
        });
    }

  

    //     public function leaseAgreements()
    //     {
    //         return $this->hasMany(LeaseAgreement::class);
    //     }

    /**
     * The "booted" method of the model.
     */
    // protected static function booted(): void
    // {
    //     static::addGlobalScope(new UnitScope);

    // }   
    // protected static function booted()
    // {
    //     static::addGlobalScope(new UnitScope());
    // }
}
