<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaxaLevelResource;
use App\Models\TaxaLevel;
use Illuminate\Http\Request;

class TaxaLevelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return TaxaLevelResource::collection(TaxaLevel::paginate(10));
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
     * @param  \App\Models\TaxaLevel  $taxaLevel
     * @return \Illuminate\Http\Response
     */
    public function show(TaxaLevel $taxaLevel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TaxaLevel  $taxaLevel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TaxaLevel $taxaLevel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TaxaLevel  $taxaLevel
     * @return \Illuminate\Http\Response
     */
    public function destroy(TaxaLevel $taxaLevel)
    {
        //
    }
}
