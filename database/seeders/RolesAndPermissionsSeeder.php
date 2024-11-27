<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;



class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */


     public function run()
     {
         // Reset cached roles and permissions
         app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
     
         // Create permissions with correct guard_name
         Permission::create(['name' => 'manage properties', 'guard_name' => 'landlord']);
         Permission::create(['name' => 'manage tenants', 'guard_name' => 'landlord']);
         Permission::create(['name' => 'manage tenants', 'guard_name' => 'company']);
         Permission::create(['name' => 'manage landlords', 'guard_name' => 'company']);
         Permission::create(['name' => 'manage properties', 'guard_name' => 'company']);
         Permission::create(['name' => 'manage payments', 'guard_name' => 'tenant']);
     
         // Create roles and assign created permissions
     
         // Tenant Role
         $tenantRole = Role::create(['name' => 'tenant', 'guard_name' => 'tenant']);
         $tenantRole->givePermissionTo(['manage payments']);  // Ensure guard matches
     
         // Landlord Role
         $landlordRole = Role::create(['name' => 'landlord', 'guard_name' => 'landlord']);
         $landlordRole->givePermissionTo(['manage properties', 'manage tenants']);  // Ensure guard matches
     
         // Company Role
         $companyRole = Role::create(['name' => 'company', 'guard_name' => 'company']);
         $companyRole->givePermissionTo(['manage properties', 'manage landlords', 'manage tenants']);  // Ensure guard matches
     
         // Super Admin Role (Web guard)
         $superAdminRole = Role::create(['name' => 'user', 'guard_name' => 'web']);
         $superAdminRole->givePermissionTo(Permission::where('guard_name', 'web')->get());  // Assign only web guard permissions
     }
     




}










