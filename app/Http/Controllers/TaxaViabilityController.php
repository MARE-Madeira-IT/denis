<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaxaViabilityResource;
use App\Models\TaxaViability;
use Illuminate\Http\Request;

class TaxaViabilityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return TaxaViabilityResource::collection(TaxaViability::paginate(10));
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
     * @param  \App\Models\TaxaViability  $taxaViability
     * @return \Illuminate\Http\Response
     */
    public function show(TaxaViability $taxaViability)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TaxaViability  $taxaViability
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TaxaViability $taxaViability)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TaxaViability  $taxaViability
     * @return \Illuminate\Http\Response
     */
    public function destroy(TaxaViability $taxaViability)
    {
        //
    }
}
