<?php

namespace App\Http\Controllers;

use App\Http\Resources\DebrisMaterialResource;
use App\Models\DebrisMaterial;
use Illuminate\Http\Request;

class DebrisMaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return DebrisMaterialResource::collection(DebrisMaterial::paginate(10));
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
     * @param  \App\Models\DebrisMaterial  $debrisMaterial
     * @return \Illuminate\Http\Response
     */
    public function show(DebrisMaterial $debrisMaterial)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DebrisMaterial  $debrisMaterial
     * @return \Illuminate\Http\Response
     */
    public function edit(DebrisMaterial $debrisMaterial)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DebrisMaterial  $debrisMaterial
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DebrisMaterial $debrisMaterial)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DebrisMaterial  $debrisMaterial
     * @return \Illuminate\Http\Response
     */
    public function destroy(DebrisMaterial $debrisMaterial)
    {
        //
    }
}
