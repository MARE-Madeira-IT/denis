<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('debris/materials', 'App\Http\Controllers\DebrisMaterialController');
Route::apiResource('debris/types', 'App\Http\Controllers\DebrisTypeController');
Route::apiResource('debris/sizes', 'App\Http\Controllers\DebrisSizeController');
Route::apiResource('debris/thicknesses', 'App\Http\Controllers\DebrisThicknessController');
Route::apiResource('debris/habitats', 'App\Http\Controllers\DebrisHabitatController');
Route::apiResource('debris/rugosities', 'App\Http\Controllers\DebrisRugosityController');
Route::apiResource('debris/categories', 'App\Http\Controllers\DebrisCategoryController');
Route::apiResource('debris/subcategories', 'App\Http\Controllers\DebrisSubCategoryController');