<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiBillController;
use App\Http\Controllers\ApiUnitController;
use App\Http\Controllers\MpesaApiController;
use App\Http\Controllers\ApiTenantController;
use App\Http\Controllers\ApiInvoiceController;
use App\Http\Controllers\ApiLandlordController;
use App\Http\Controllers\ApiPropertyController;
use App\Http\Controllers\TransactionController;


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
Route::post('/landlord', [ApiLandlordController::class, 'store']);
Route::get('/landlord/{id}', [ApiLandlordController::class, 'show']);
Route::put('/landlord/{id}', [ApiLandlordController::class, 'update']);







Route::get('/property', [ApiPropertyController ::class, 'index']);
Route::get('/property/search', [ApiPropertyController::class, 'propertySearch']);
Route::post('/property', [ApiPropertyController::class, 'store']);
Route::get('/property/{id}', [ApiPropertyController ::class, 'show']);
Route::put('/property/{id}', [ApiPropertyController::class, 'update']);




Route::get('/bills/{id}', [ApiBillController::class, 'index']);
Route::post('/bill', [ApiBillController::class, 'store']);
Route::get('/billList', [ApiBillController::class, 'billList']);

Route::get('/bill/{id}', [ApiBillController::class, 'show']);
Route::put('/bill/{id}', [ApiBillController::class, 'update']);
Route::delete('/bill/{id}', [ApiBillController::class, 'destroy']);









Route::post('/tenant', [ApiTenantController::class, 'store']);
Route::get('/tenants', [ApiTenantController::class, 'index']);
Route::get('/tenant/{id}', [ApiTenantController::class, 'show']);
Route::put('/tenant/{id}', [ApiTenantController::class, 'update']);
Route::post('submitBill/{id}', [ApiTenantController::class, 'submitBill']);
Route::post('tenantInvoice/{id}', [ApiTenantController::class, 'tenantInvoice']);











Route::post('/unit', [ApiUnitController::class, 'store']);
Route::get('/unit/{id}', [ApiUnitController ::class, 'show']);
Route::get('/units', [ApiUnitController ::class, 'index']);
Route::put('/unit/{id}', [ApiUnitController::class, 'update']);









Route::get('/invoices', [ApiInvoiceController::class, 'index']);

Route::get('/invoice{id}', [ApiInvoiceController::class, 'show']);
Route::post('/invoice{id}', [ApiInvoiceController::class, 'update']);
Route::post('/invoice', [ApiInvoiceController::class, 'store']);










// Route to delete 
Route::delete('/property/{id}', [ApiPropertyController::class, 'destroy']);
Route::delete('/unit/{id}', [ApiUnitController::class, 'destroy']);
Route::post('/tenant{id}', [ApiTenantController::class, 'destroy']);
Route::post('/invoice{id}', [ApiInvoiceController::class, 'destroy']);




Route::any('/payment', [TransactionController::class, 'payment']);
Route::any('/confirmation', [TransactionController::class, 'store']);
Route::any('/validation', [TransactionController::class, 'store']);



// mpesa
Route::get('/token', [MpesaApiController::class, 'generateToken']);
// Route::get('/stkpush', [MpesaApiController::class, 'initiateSTKPush']);
Route::get('/callback', [MpesaApiController::class, 'handleCallback']);


// routes/web.php or routes/api.php

// Route::get('/mpesa/stkpush/{phone}', [MpesaApiController::class, 'initiateSTKPush'])->name('mpesa.stkpush');
// In your routes file
Route::get('/api/mpesa/stkpush/{phone}/{unit_number}/{amount}', [MpesaApiController::class, 'initiateSTKPush'])->name('mpesa.stkpush');








