<?php

namespace App\Http\Controllers;

use App\Http\Requests\DebrisMaterialRequest;
use App\Http\Resources\DebrisMaterialResource;
use App\Models\DebrisMaterial;
use App\QueryFilters\DebrisMaterialFilters;
use Illuminate\Http\Request;

class DebrisMaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(DebrisMaterialFilters $filters)
    {
        return DebrisMaterialResource::collection(DebrisMaterial::filterBy($filters)->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DebrisMaterialRequest $request)
    {
        $validator = $request->validated();
        $record = DebrisMaterial::create($validator);

        return new DebrisMaterialResource($record);
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
    public function destroy(DebrisMaterial $material)
    {
        $material->delete();

        return response()->noContent();
    }
}
