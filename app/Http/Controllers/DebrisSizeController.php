<?php

namespace App\Http\Controllers;

use App\Http\Resources\DebrisSizeResource;
use App\Models\DebrisSize;
use App\QueryFilters\DebrisSizeFilters;
use Illuminate\Http\Request;

class DebrisSizeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(DebrisSizeFilters $filters)
    {
        return DebrisSizeResource::collection(DebrisSize::filterBy($filters)->paginate(10));
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
     * @param  \App\Models\DebrisSize  $debrisSize
     * @return \Illuminate\Http\Response
     */
    public function show(DebrisSize $debrisSize)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DebrisSize  $debrisSize
     * @return \Illuminate\Http\Response
     */
    public function edit(DebrisSize $debrisSize)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DebrisSize  $debrisSize
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DebrisSize $debrisSize)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DebrisSize  $debrisSize
     * @return \Illuminate\Http\Response
     */
    public function destroy(DebrisSize $size)
    {
        $size->delete();

        return response()->noContent();
    }
}
