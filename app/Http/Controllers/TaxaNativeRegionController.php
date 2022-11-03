<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaxaNativeRegionRequest;
use App\Http\Resources\TaxaNativeRegionResource;
use App\Models\TaxaNativeRegion;
use App\QueryFilters\TaxaNativeRegionFilters;
use Illuminate\Http\Request;

class TaxaNativeRegionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(TaxaNativeRegionFilters $filters)
    {
        return TaxaNativeRegionResource::collection(TaxaNativeRegion::filterBy($filters)->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TaxaNativeRegionRequest $request)
    {
        $validator = $request->validated();
        $record = TaxaNativeRegion::create($validator);

        return new TaxaNativeRegionResource($record);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TaxaNativeRegion  $taxaNativeRegion
     * @return \Illuminate\Http\Response
     */
    public function show(TaxaNativeRegion $taxaNativeRegion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TaxaNativeRegion  $taxaNativeRegion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TaxaNativeRegion $taxaNativeRegion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TaxaNativeRegion  $taxaNativeRegion
     * @return \Illuminate\Http\Response
     */
    public function destroy(TaxaNativeRegion $nativeregion)
    {
        $nativeregion->delete();

        return response()->noContent();
    }
}
