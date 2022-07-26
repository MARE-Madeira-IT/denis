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

Route::prefix('debris')->group(function () {
    Route::apiResource('/materials', 'App\Http\Controllers\DebrisMaterialController');
    Route::apiResource('/types', 'App\Http\Controllers\DebrisTypeController');
    Route::apiResource('/sizes', 'App\Http\Controllers\DebrisSizeController');
    Route::apiResource('/thicknesses', 'App\Http\Controllers\DebrisThicknessController');
    Route::apiResource('/habitats', 'App\Http\Controllers\DebrisHabitatController');
    Route::apiResource('/rugosities', 'App\Http\Controllers\DebrisRugosityController');
    Route::apiResource('/categories', 'App\Http\Controllers\DebrisCategoryController');
    Route::apiResource('/subcategories', 'App\Http\Controllers\DebrisSubCategoryController');
});


Route::prefix('taxa')->group(function () {
    Route::apiResource('/levels', 'App\Http\Controllers\TaxaLevelController');
    Route::apiResource('/speciesstatuses', 'App\Http\Controllers\TaxaSpeciesStatusController');
    Route::apiResource('/populationstatuses', 'App\Http\Controllers\TaxaPopulationStatusController');
    Route::apiResource('/abundances', 'App\Http\Controllers\TaxaAbundanceController');
    Route::apiResource('/viabilities', 'App\Http\Controllers\TaxaViabilityController');
    Route::apiResource('/maturities', 'App\Http\Controllers\TaxaMaturityController');
    Route::apiResource('/nativeregions', 'App\Http\Controllers\TaxaNativeRegionController');
});
