<?php

use App\Http\Controllers\ApiBillController;
use App\Http\Controllers\ApiInvoiceController;
use App\Http\Controllers\ApiLandlordController;
use App\Http\Controllers\ApiPropertyController;
use App\Http\Controllers\ApiTenantController;
use App\Http\Controllers\ApiUnitController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

   
});

// Route to get a list 
Route::get('/landlords', [ApiLandlordController::class, 'index']);
Route::get('/landlords/search', [ApiLandlordController::class, 'landlordSearch']);


Route::get('/property', [ApiPropertyController ::class, 'index']);
Route::get('/property/search', [ApiPropertyController::class, 'propertySearch']);

Route::get('/units', [ApiUnitController ::class, 'index']);
Route::get('/tenants', [ApiTenantController::class, 'index']);
Route::get('/bills', [ApiBillController::class, 'index']);
Route::get('/invoices', [ApiInvoiceController::class, 'index']);



// Route to create a new 
Route::post('/landlord', [ApiLandlordController::class, 'store']);
Route::post('/property', [ApiPropertyController::class, 'store']);
Route::post('/unit', [ApiUnitController::class, 'store']);
Route::post('/tenant', [ApiTenantController::class, 'store']);
Route::post('/bill', [ApiBillController::class, 'store']);
Route::post('/invoice', [ApiInvoiceController::class, 'store']);





// Route to get a single 
Route::get('/landlord/{id}', [ApiLandlordController::class, 'show']);
Route::get('/property/{id}', [ApiPropertyController ::class, 'show']);
Route::get('/unit/{id}', [ApiUnitController ::class, 'show']);
Route::get('/tenant{id}', [ApiTenantController::class, 'show']);
Route::get('/bill{id}', [ApiBillController::class, 'show']);
Route::get('/invoice{id}', [ApiInvoiceController::class, 'show']);







// Route to update 
Route::put('/landlord/{id}', [ApiLandlordController::class, 'update']);
Route::put('/property/{id}', [ApiPropertyController::class, 'update']);
Route::put('/unit/{id}', [ApiUnitController::class, 'update']);
Route::post('/tenant{id}', [ApiTenantController::class, 'update']);
Route::post('/bill{id}', [ApiBillController::class, 'update']);
Route::post('/invoice{id}', [ApiInvoiceController::class, 'update']);







// Route to delete 
Route::delete('/landlord/{id}', [ApiLandlordController::class, 'destroy']);
Route::delete('/property/{id}', [ApiPropertyController::class, 'destroy']);
Route::delete('/unit/{id}', [ApiUnitController::class, 'destroy']);
Route::post('/tenant{id}', [ApiTenantController::class, 'destroy']);
Route::post('/bill', [ApiBillController::class, 'destroy']);
Route::post('/invoice', [ApiInvoiceController::class, 'destroy']);





