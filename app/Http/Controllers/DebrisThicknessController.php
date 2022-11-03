<?php

namespace App\Http\Controllers;

use App\Http\Resources\DebrisThicknessResource;
use App\Models\DebrisThickness;
use App\QueryFilters\DebrisThicknessFilters;
use Illuminate\Http\Request;

class DebrisThicknessController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(DebrisThicknessFilters $filters)
    {
        return DebrisThicknessResource::collection(DebrisThickness::filterBy($filters)->paginate(10));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
     * @param  \App\Models\DebrisThickness  $debrisThickness
     * @return \Illuminate\Http\Response
     */
    public function show(DebrisThickness $debrisThickness)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DebrisThickness  $debrisThickness
     * @return \Illuminate\Http\Response
     */
    public function edit(DebrisThickness $debrisThickness)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DebrisThickness  $debrisThickness
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DebrisThickness $debrisThickness)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DebrisThickness  $debrisThickness
     * @return \Illuminate\Http\Response
     */
    public function destroy(DebrisThickness $thickness)
    {
        $thickness->delete();

        return response()->noContent();
    }
}
