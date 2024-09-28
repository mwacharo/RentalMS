

<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ApiBillController;
use App\Http\Controllers\ApiUnitController;
use App\Http\Controllers\MpesaApiController;
use App\Http\Controllers\ApiTenantController;
use App\Http\Controllers\ApiVacantController;
use App\Http\Controllers\ApiInvoiceController;
use App\Http\Controllers\ApiLandlordController;
use App\Http\Controllers\ApiPropertyController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\ApiBookVacantController;
use App\Http\Controllers\ApiCompanyController;
use App\Http\Controllers\ApiPermissionsController;
use App\Http\Controllers\ApiRoleController;
use App\Http\Controllers\ApiRolesController;
use App\Http\Controllers\ApiUserController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\LandlordController;
use App\Http\Controllers\TenantController;
use Illuminate\Support\Facades\Auth;

// Routes for unauthenticated users
Route::get('/', function () {
    return Inertia::render('Login', [
        // 'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::middleware(['auth:tenant'])->get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->name('dashboard');


// Route::middleware(['auth:web,tenant,landlord,company'])->get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->name('dashboard');


// Authentication routes for specific roles
Route::middleware(['auth:web'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::middleware(['auth:tenant'])->group(function () {
    Route::get('/tenant-dashboard', function () {
        return Inertia::render('TenantDashboard');
    })->name('tenant-dashboard');


});

Route::middleware(['auth:landlord'])->group(function () {
    Route::get('/landlord-dashboard', function () {
        return Inertia::render('LandlordDashboard');
    })->name('landlord-dashboard');
});

Route::middleware(['auth:company'])->group(function () {
    Route::get('/company-dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

// Routes requiring sanctum authentication (e.g., for API)
Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'])->group(function () {
    Route::get('/sanctum-dashboard', function () {
        return Inertia::render('SanctumDashboard');
    })->name('sanctum-dashboard');
});

Route::get('/maintenance', function () {
    return Inertia::render('Tenant');
})->name('maintenance');


Route::get('/tenant', function () {
    return Inertia::render('Tenant');
})->name('tenant');


Route::get('/unit', function () {
    return Inertia::render('Unit');
})->name('unit');


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

Route::get('/company', function () {
    return Inertia::render('Company');
})->name('company');



Route::get('/invoice', function () {
    return Inertia::render('Invoice');
})->name('invoice');


// Route::get('/unit', function () {
//     return Inertia::render('Unit');
// })->name('unit');

Route::get('/bill', function () {
    return Inertia::render('Bills');
})->name('bill');


Route::get('/phone', function () {
    return Inertia::render('Phone');
})->name('phone');


Route::get('/agentdashboard', function () {
    return Inertia::render('AgentDashboard');
})->name('agentdashboard');


Route::get('/vacantAd', function () {
    return Inertia::render('VacantAd');
})->name('vacantAd');



Route::post('/unit', [ApiUnitController::class, 'store']);
Route::get('/unit/{id}', [ApiUnitController::class, 'show']);
Route::get('/units', [ApiUnitController::class, 'index']);

// Route::get('/units', [ApiUnitController::class, 'index'])->middleware(['auth']);
Route::put('/unit/{id}', [ApiUnitController::class, 'update']);

Route::get('/users', [ApiUserController::class, 'index']);
Route::post('/user', [ApiUserController::class, 'store']);
Route::get('/update', [ApiUserController::class, 'update']);
Route::get('/user', [ApiUserController::class, 'index']);

//     Route to get a list 
Route::get('/landlords', [ApiLandlordController::class, 'index']);
Route::get('/landlords/search', [ApiLandlordController::class, 'landlordSearch']);
Route::post('/landlord', [ApiLandlordController::class, 'store']);
Route::get('/landlord/{id}', [ApiLandlordController::class, 'show']);
Route::put('/landlord/{id}', [ApiLandlordController::class, 'update']);


Route::get('/properties', [ApiPropertyController::class, 'index'])->name('properties');
Route::get('/property/search', [ApiPropertyController::class, 'propertySearch']);
Route::post('/property', [ApiPropertyController::class, 'store']);
Route::get('/property/{id}', [ApiPropertyController::class, 'show']);
Route::put('/property/{id}', [ApiPropertyController::class, 'update']);


Route::get('/bills/{id}', [ApiBillController::class, 'inApiBookVacantControllerdex']);
Route::post('/bill', [ApiBillController::class, 'store']);
Route::get('/billList', [ApiBillController::class, 'billList']);

Route::get('/bill/{id}', [ApiBillController::class, 'show']);
Route::put('/bill/{id}', [ApiBillController::class, 'update']);
Route::delete('/bill/{id}', [ApiBillController::class, 'destroy']);


Route::post('/tenant', [ApiTenantController::class, 'store']);
Route::get('/tenants', [ApiTenantController::class, 'index']);
Route::get('/tenant/{id}', [ApiTenantController::class, 'show']);
Route::put('/tenant/{id}', [ApiTenantController::class, 'update']);
Route::delete('/tenant/{id}', [ApiTenantController::class, 'destroy']);

Route::post('submitBill/{id}', [ApiTenantController::class, 'submitBill']);
Route::post('tenantInvoice/{id}', [ApiTenantController::class, 'tenantInvoice']);

Route::post('/upload', [ApiTenantController::class, 'upload']);



// company 



Route::post('/company', [ApiCompanyController::class, 'store']);
Route::get('/companies', [ApiCompanyController::class, 'index']);
Route::get('/company/{id}', [ApiCompanyController::class, 'show']);
Route::put('/company/{id}', [ApiCompanyController::class, 'update']);
Route::delete('/company/{id}', [ApiCompanyController::class, 'destroy']);

// role
Route::get('/v1/roles', [ApiRoleController::class, 'index']);



Route::get('/invoices', [ApiInvoiceController::class, 'index']);

Route::get('/invoice{id}', [ApiInvoiceController::class, 'show']);
Route::post('/invoice{id}', [ApiInvoiceController::class, 'update']);
Route::post('/invoice', [ApiInvoiceController::class, 'store']);



// // Route to delete 
Route::delete('/property/{id}', [ApiPropertyController::class, 'destroy']);
Route::delete('/unit/{id}', [ApiUnitController::class, 'destroy']);
Route::post('/tenant{id}', [ApiTenantController::class, 'destroy']);
Route::post('/invoice{id}', [ApiInvoiceController::class, 'destroy']);




Route::any('/payment', [TransactionController::class, 'payment']);
Route::any('/confirmation', [TransactionController::class, 'store']);
Route::any('/validation', [TransactionController::class, 'store']);



// // mpesa
// Route::get('/token', [MpesaApiController::class, 'generateToken']);
// // Route::get('/stkpush', [MpesaApiController::class, 'initiateSTKPush']);
// Route::get('/callback', [MpesaApiController::class, 'handleCallback']);


// Route::get('/confirmation', [MpesaApiController::class, 'handleConfirmationCallback']);


// Route::get('/registerUrl', [MpesaApiController::class, 'registerUrl']);


// // Route::post('/mpesa/validation', [MpesaApiController::class, 'handleValidationCallback']);




// // routes/web.php or routes/api.php

// // Route::get('/mpesa/stkpush/{phone}', [MpesaApiController::class, 'initiateSTKPush'])->name('mpesa.stkpush');
// // In your routes file
// // Route::get('/mpesa/stkpush/{phone}/{unit_number}/{amount}', [MpesaApiController::class, 'initiateSTKPush'])->name('mpesa.stkpush');


Route::get('/vacant', [ApiVacantController::class, 'index']);

Route::post('/vacantAd', [ApiVacantController::class, 'store']);
Route::post('/book{id}', [ApiBookVacantController::class, 'store']);
// Route::get('/book{id}', [ApiBookVacantContrbookingsoller::class, 'index']);

Route::get('/bookings', [ApiBookVacantController::class, 'index']);
Route::get('/booked', [ApiBookVacantController::class, 'propertyBookings']);
Route::middleware('userAuth')->group(function () {});
Route::middleware('auth:api')->group(function () {
// Route::apiResource('/book{id}', 'ApiBookVacantController');
});

Route::get('/bookings', [ApiBookVacantController::class, 'index']);


// permissions and roles 


// /api/v1/permissions


Route::get('v1/roles', [ApiRolesController::class, 'index']);
Route::get('v1/permissions', [ApiPermissionsController::class, 'index']);




// });
