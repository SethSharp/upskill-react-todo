<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', \App\Http\Controllers\DashboardController::class)->name('dashboard');

    Route::prefix('/tasks')->name('tasks.')->group(function () {
        Route::put('/{task}/update', \App\Http\Controllers\Tasks\UpdateTaskController::class)->name('update');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
