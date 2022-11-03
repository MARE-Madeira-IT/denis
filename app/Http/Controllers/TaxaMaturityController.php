<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaxaMaturityResource;
use App\Models\TaxaMaturity;
use App\QueryFilters\TaxaMaturityFilters;
use Illuminate\Http\Request;

class TaxaMaturityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(TaxaMaturityFilters $filters)
    {
        return TaxaMaturityResource::collection(TaxaMaturity::filterBy($filters)->paginate(10));
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
     * @param  \App\Models\TaxaMaturity  $taxaMaturity
     * @return \Illuminate\Http\Response
     */
    public function show(TaxaMaturity $taxaMaturity)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TaxaMaturity  $taxaMaturity
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TaxaMaturity $taxaMaturity)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TaxaMaturity  $taxaMaturity
     * @return \Illuminate\Http\Response
     */
    public function destroy(TaxaMaturity $maturity)
    {
        $maturity->delete();

        return response()->noContent();
    }
}
