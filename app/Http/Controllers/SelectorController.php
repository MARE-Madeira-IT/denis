<?php

namespace App\Http\Controllers;

use App\Http\Resources\CompleteDebrisCategoryResource;
use App\Http\Resources\CountryResource;
use App\Http\Resources\DebrisHabitatResource;
use App\Http\Resources\DebrisMaterialResource;
use App\Http\Resources\DebrisRugosityResource;
use App\Http\Resources\DebrisSizeResource;
use App\Http\Resources\DebrisThicknessResource;
use App\Http\Resources\DebrisTypeResource;
use App\Http\Resources\LmeResource;
use App\Http\Resources\TaxaAbundanceResource;
use App\Http\Resources\TaxaLevelResource;
use App\Http\Resources\TaxaMaturityResource;
use App\Http\Resources\TaxaNativeRegionResource;
use App\Http\Resources\TaxaPopulationStatusResource;
use App\Http\Resources\TaxaSpeciesStatusResource;
use App\Http\Resources\TaxaViabilityResource;
use App\Models\Country;
use App\Models\DebrisCategory;
use App\Models\DebrisHabitat;
use App\Models\DebrisMaterial;
use App\Models\DebrisRugosity;
use App\Models\DebrisSize;
use App\Models\DebrisThickness;
use App\Models\DebrisType;
use App\Models\Lme;
use App\Models\TaxaAbundance;
use App\Models\TaxaLevel;
use App\Models\TaxaMaturity;
use App\Models\TaxaNativeRegion;
use App\Models\TaxaPopulationStatus;
use App\Models\TaxaSpeciesStatus;
use App\Models\TaxaViability;
use Illuminate\Http\Request;

class SelectorController extends Controller
{
    public function lmes()
    {
        return LmeResource::collection(Lme::all());
    }

    public function countries()
    {
        return CountryResource::collection(Country::all());
    }

    public function debrisTypes()
    {
        return DebrisTypeResource::collection(DebrisType::all());
    }

    public function debrisHabitats()
    {
        return DebrisHabitatResource::collection(DebrisHabitat::all());
    }

    public function debrisMaterials()
    {
        return DebrisMaterialResource::collection(DebrisMaterial::all());
    }

    public function debrisSizes()
    {
        return DebrisSizeResource::collection(DebrisSize::all());
    }

    public function debrisThicknesses()
    {
        return DebrisThicknessResource::collection(DebrisThickness::all());
    }

    public function debrisRugosities()
    {
        return DebrisRugosityResource::collection(DebrisRugosity::all());
    }

    public function debrisCategories()
    {
        return CompleteDebrisCategoryResource::collection(DebrisCategory::all());
    }

    public function taxaLevels()
    {
        return TaxaLevelResource::collection(TaxaLevel::all());
    }

    public function taxaSpeciesstatuses()
    {
        return TaxaSpeciesStatusResource::collection(TaxaSpeciesStatus::all());
    }

    public function taxaPopulationstatuses()
    {
        return TaxaPopulationStatusResource::collection(TaxaPopulationStatus::all());
    }

    public function taxaAbundances()
    {
        return TaxaAbundanceResource::collection(TaxaAbundance::all());
    }

    public function taxaViabilities()
    {
        return TaxaViabilityResource::collection(TaxaViability::all());
    }

    public function taxaMaturities()
    {
        return TaxaMaturityResource::collection(TaxaMaturity::all());
    }

    public function taxaNativeRegions()
    {
        return TaxaNativeRegionResource::collection(TaxaNativeRegion::orderBy('name')->get());
    }
}
