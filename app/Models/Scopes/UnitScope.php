<?php

namespace App\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;
use Illuminate\Support\Facades\Auth;

class UnitScope implements Scope
{
    /**
     * Apply the scope to a given Eloquent query builder.
     */
    public function apply(Builder $builder, Model $model): void
    {
        if (Auth::user()->is_tenant) {

            $builder->where('tenant_id', Auth::id());
        }


        if (Auth::user()->is_user) {

            // $builder->where('tenant_id', Auth::id());
        }



        
        
        // elseif (Auth::user()->is_user) {

        //     $builder->where('tenant_id', Auth::id());
        // }



           // If the user is an admin, landlord, or company, they should see all units
    if (Auth::user()->is_admin || Auth::user()->is_landlord || Auth::user()->is_company) {
        // No restriction, they see all records (so no 'where' clause)
    }
    }
}
