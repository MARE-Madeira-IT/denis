<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaxaSpeciesStatusResource;
use App\Models\TaxaSpeciesStatus;
use App\QueryFilters\TaxaSpeciesStatusFilters;
use Illuminate\Http\Request;

class TaxaSpeciesStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(TaxaSpeciesStatusFilters $filters)
    {
        return TaxaSpeciesStatusResource::collection(TaxaSpeciesStatus::filterBy($filters)->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TaxaSpeciesStatus  $taxaSpeciesStatus
     * @return \Illuminate\Http\Response
     */
    public function show(TaxaSpeciesStatus $taxaSpeciesStatus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TaxaSpeciesStatus  $taxaSpeciesStatus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TaxaSpeciesStatus $taxaSpeciesStatus)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TaxaSpeciesStatus  $taxaSpeciesStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy(TaxaSpeciesStatus $speciesstatus)
    {
        $speciesstatus->delete();

        return response()->noContent();
    }
}
