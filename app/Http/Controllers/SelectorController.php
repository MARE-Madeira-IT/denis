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
use App\Models\Country;
use App\Models\DebrisCategory;
use App\Models\DebrisHabitat;
use App\Models\DebrisMaterial;
use App\Models\DebrisRugosity;
use App\Models\DebrisSize;
use App\Models\DebrisThickness;
use App\Models\DebrisType;
use App\Models\Lme;
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
}
