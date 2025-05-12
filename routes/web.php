<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/* ---------------------------------- Auth ---------------------------------- */
Route::get('/login', function () {
    return Inertia::render('auth/login');
})->name('login');
Route::get('/register', function () {
    return Inertia::render('auth/register');
});


/* -------------------------------- Dashboard ------------------------------- */
Route::middleware(['verified', 'auth'])->prefix('dashboard')->group(function () {
    Route::get('/', function () {
        return Inertia::render('dashboard/home');
    })->name('home');
});
