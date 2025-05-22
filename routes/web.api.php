<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CustomerTransationController;
use App\Http\Controllers\others\DashboardController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/* ---------------------------------- Auth ---------------------------------- */

Route::controller(UserController::class)->prefix('user')->group(function () {
    Route::post('/login', 'login')->name('user.login');
    Route::post('/register', 'register')->name('user.register');

    Route::middleware(['verified', 'auth'])->group(function () {
        Route::get('/', 'index')->name('user');
        Route::post('/logout', 'logout')->name('user.logout');
    });
});

/* -------------------------------- Customer Resource -------------------------------- */
Route::apiResource('customers', CustomerController::class)->parameters(['customers' => 'customer:slug'])->middleware(['auth', 'verified']);



/* -------------------------- Customer Transaction -------------------------- */
Route::apiResource('customer-transition', CustomerTransationController::class)->only('update', 'destroy')->middleware(['auth', 'verified']);

Route::controller(CustomerTransationController::class)->prefix('customers')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/{customer:slug}/transition', 'index');
    Route::post('/{customer:slug}/transition', 'store');
    Route::get('/{customer:slug}/transition/{customerTransation}', 'show');


    Route::get('/transition/due-history', 'getDueHistory');
});


/* ------------------------------  Dashboard ----------------------------- */
Route::controller(DashboardController::class)->middleware(['auth', 'verified'])->group(function () {
    Route::get('/statistics', 'getStatistics');
});
