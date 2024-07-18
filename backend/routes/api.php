<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\FavoriteController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* ROUTE AUTH/LOGIN */

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function () {
    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api')->name('logout');
    Route::post('/refresh', [AuthController::class, 'refresh'])->middleware('auth:api')->name('refresh');
    Route::post('/me', [AuthController::class, 'me'])->middleware('auth:api')->name('me');
});

/* ROUTE CARS */
Route::get('cars/all', [CarController::class, 'getAllCars']);

Route::middleware(['role:admin'])->group(function () {
    Route::resource('cars', CarController::class);
});


/* ROUTE BRAND */
Route::middleware(['role:admin'])->group(function () {
    Route::resource('brands', BrandController::class);
});

Route::middleware('auth:api')->group(function () {
    Route::post('/favorites/{carId}', [FavoriteController::class, 'addFavorite']);
    Route::delete('/favorites/{carId}', [FavoriteController::class, 'removeFavorite']);
    Route::get('/favorites', [FavoriteController::class, 'getFavorites']);
});

