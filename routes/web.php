<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CustomerTransationController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/* ---------------------------------- Auth ---------------------------------- */
Route::get('/login', function () {
    return Inertia::render('auth/login');
});
Route::get('/register', function () {
    return Inertia::render('auth/register');
});


/* -------------------------------- Dashboard ------------------------------- */
Route::middleware('auth:sanctum')->prefix('dashboard')->group(function () {
    Route::get('/', function () {
        return Inertia::render('home');
    })->name('home');

});



