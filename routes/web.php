

<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [

        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/tenant', function () {
        return Inertia::render('Tenant');
    })->name('tenant');


    Route::get('/landlord', function () {
        return Inertia::render('Landlord');
    })->name('landlord');

    Route::get('/property', function () {
        return Inertia::render('Property');
    })->name('property');



    Route::get('/booking', function () {
        return Inertia::render('Booking');
    })->name('booking');

    Route::get('/lease', function () {
        return Inertia::render('Lease');
    })->name('lease');


    Route::get('/payment', function () {
        return Inertia::render('Payment');
    })->name('payment');


    Route::get('/admin', function () {
        return Inertia::render('Admin');
    })->name('admin');


    Route::get('/invoice', function () {
        return Inertia::render('Invoice');
    })->name('invoice');

});



