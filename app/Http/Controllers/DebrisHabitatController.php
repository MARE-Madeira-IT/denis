<?php

namespace App\Http\Controllers;

use App\Http\Resources\DebrisHabitatResource;
use App\Models\DebrisHabitat;
use Illuminate\Http\Request;

class DebrisHabitatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DebrisHabitatResource::collection(DebrisHabitat::paginate(10));
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
     * @param  \App\Models\DebrisHabitat  $debrisHabitat
     * @return \Illuminate\Http\Response
     */
    public function show(DebrisHabitat $debrisHabitat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DebrisHabitat  $debrisHabitat
     * @return \Illuminate\Http\Response
     */
    public function edit(DebrisHabitat $debrisHabitat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DebrisHabitat  $debrisHabitat
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DebrisHabitat $debrisHabitat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DebrisHabitat  $debrisHabitat
     * @return \Illuminate\Http\Response
     */
    public function destroy(DebrisHabitat $debrisHabitat)
    {
        //
    }
}
