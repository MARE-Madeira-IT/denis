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

Route::apiResource('/reports', 'App\Http\Controllers\ReportController');
Route::apiResource('/users', 'App\Http\Controllers\UserController');

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


Route::prefix('selector')->group(function () {
    Route::get('/site/countries', 'App\Http\Controllers\SelectorController@countries');
    Route::get('/site/lmes', 'App\Http\Controllers\SelectorController@lmes');

    Route::prefix('taxa')->group(function () {
        Route::get('/levels', 'App\Http\Controllers\SelectorController@taxaLevels');
        Route::get('/speciesstatuses', 'App\Http\Controllers\SelectorController@taxaSpeciesstatuses');
        Route::get('/populationstatuses', 'App\Http\Controllers\SelectorController@taxaPopulationstatuses');
        Route::get('/abundances', 'App\Http\Controllers\SelectorController@taxaAbundances');
        Route::get('/viabilities', 'App\Http\Controllers\SelectorController@taxaViabilities');
        Route::get('/maturities', 'App\Http\Controllers\SelectorController@taxaMaturities');
        Route::get('/nativeregions', 'App\Http\Controllers\SelectorController@taxaNativeregions');
    });

    Route::prefix('debris')->group(function () {
        Route::get('/materials', 'App\Http\Controllers\SelectorController@debrisMaterials');
        Route::get('/types', 'App\Http\Controllers\SelectorController@debrisTypes');
        Route::get('/sizes', 'App\Http\Controllers\SelectorController@debrisSizes');
        Route::get('/thicknesses', 'App\Http\Controllers\SelectorController@debrisThicknesses');
        Route::get('/habitats', 'App\Http\Controllers\SelectorController@debrisHabitats');
        Route::get('/rugosities', 'App\Http\Controllers\SelectorController@debrisRugosities');
        Route::get('/categories', 'App\Http\Controllers\SelectorController@debrisCategories');
        Route::get('/subcategories', 'App\Http\Controllers\SelectorController@debrisSubcategories');
    });
});
