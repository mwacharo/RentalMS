<?php

return [

    'defaults' => [
        'guard' => 'web',
        'passwords' => 'users',
    ],

    'guards' => [
        'web' => [
            'driver' => 'session',
            'provider' => 'users',
        ],

        'tenant' => [
            'driver' => 'session',
            'provider' => 'tenants',
        ],

        'landlord' => [
            'driver' => 'session',
            'provider' => 'landlords',
        ],

        'company' => [
            'driver' => 'session',
            'provider' => 'companies',
        ],
    ],

    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model' => App\Models\User::class,
        ],

        'tenants' => [
            'driver' => 'eloquent',
            'model' => App\Models\Tenant::class,
        ],

        'landlords' => [
            'driver' => 'eloquent',
            'model' => App\Models\Landlord::class,
        ],

        'companies' => [
            'driver' => 'eloquent',
            'model' => App\Models\Company::class,
        ],
    ],

    'passwords' => [
        'users' => [
            'provider' => 'users',
            'table' => 'password_resets',
            'expire' => 60,
            'throttle' => 60,
        ],

        'tenants' => [
            'provider' => 'tenants',
            'table' => 'tenant_password_resets',
            'expire' => 60,
            'throttle' => 60,
        ],

        'landlords' => [
            'provider' => 'landlords',
            'table' => 'landlord_password_resets',
            'expire' => 60,
            'throttle' => 60,
        ],

        'companies' => [
            'provider' => 'companies',
            'table' => 'company_password_resets',
            'expire' => 60,
            'throttle' => 60,
        ],
    ],

    'password_timeout' => 10800,

];
