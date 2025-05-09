<?php
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CustomerTransationController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/* ---------------------------------- Auth ---------------------------------- */
Route::controller(UserController::class)->prefix('user')->group(function () {
    Route::post('/login', 'login')->name('user.login');
    Route::post('/register', 'register')->name('user.register');
    Route::get('/', 'index')->name('user')->middleware('auth:sanctum');
    Route::post('/logout', 'logout')->name('user.logout')->middleware('auth:sanctum');
});

/* -------------------------------- Customer Resource -------------------------------- */
Route::apiResource('customers', CustomerController::class)->parameters(['customers' => 'customer:slug'])->middleware('auth:sanctum');



/* -------------------------- Customer Transaction -------------------------- */
Route::apiResource('customer-transition', CustomerTransationController::class)->only('update', 'destroy')->middleware('auth:sanctum');
Route::controller(CustomerTransationController::class)->prefix('customers')->group(function () {
    Route::get('/{customer:slug}/transition', 'index');
    Route::post('/{customer:slug}/transition', 'store');
    Route::get('/{customer:slug}/transition/{customerTransation}', 'show');
});