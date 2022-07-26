<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaxaAbundanceResource;
use App\Models\TaxaAbundance;
use Illuminate\Http\Request;

class TaxaAbundanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return TaxaAbundanceResource::collection(TaxaAbundance::paginate(10));
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
     * @param  \App\Models\TaxaAbundance  $taxaAbundance
     * @return \Illuminate\Http\Response
     */
    public function show(TaxaAbundance $taxaAbundance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TaxaAbundance  $taxaAbundance
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TaxaAbundance $taxaAbundance)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TaxaAbundance  $taxaAbundance
     * @return \Illuminate\Http\Response
     */
    public function destroy(TaxaAbundance $taxaAbundance)
    {
        //
    }
}
