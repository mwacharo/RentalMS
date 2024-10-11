<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Support\Facades\Log;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    // new 
    public function render($request, Throwable $exception)
{
    Log::error("Exception on request: {$exception->getMessage()}", [
        'url' => $request->fullUrl(),
        'user_id' => optional($request->user())->id,
        'role' => $request->input('role', 'web'),
    ]);

    return parent::render($request, $exception);
}
}
