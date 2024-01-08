<?php

use App\Http\Controllers\ApiLandlordController;
use App\Http\Controllers\ApiPropertyController;
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
Route::get('/properties', [ApiPropertyController ::class, 'index']);

;

// Route to create a new 
Route::post('/landlords', [ApiLandlordController::class, 'store']);
Route::post('/properties', [ApiPropertyController::class, 'store']);

// Route to get a single 
Route::get('/landlords/{id}', [ApiLandlordController::class, 'show']);
Route::get('/properties/{id}', [ApiPropertyController ::class, 'show']);




// Route to update an existing landlord
Route::put('/landlords/{id}', [ApiLandlordController::class, 'update']);
Route::put('/properties/{id}', [ApiPropertyController::class, 'update']);


// Route to delete a landlord
Route::delete('/landlords/{id}', [ApiLandlordController::class, 'destroy']);
Route::delete('/properties/{id}', [ApiPropertyController::class, 'destroy']);

