<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaxaLevelRequest;
use App\Http\Resources\TaxaLevelResource;
use App\Models\TaxaLevel;
use App\QueryFilters\TaxaLevelFilters;
use Illuminate\Http\Request;

class TaxaLevelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(TaxaLevelFilters $filters)
    {
        return TaxaLevelResource::collection(TaxaLevel::filterBy($filters)->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TaxaLevelRequest $request)
    {
        $validator = $request->validated();
        $record = TaxaLevel::create($validator);

        return new TaxaLevelResource($record);
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
    public function destroy(TaxaLevel $level)
    {
        $level->delete();

        return response()->noContent();
    }
}
