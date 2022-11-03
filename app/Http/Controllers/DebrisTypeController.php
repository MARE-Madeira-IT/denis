<?php

namespace App\Http\Controllers;

use App\Http\Requests\DebrisTypeRequest;
use App\Http\Resources\DebrisTypeResource;
use App\Models\DebrisType;
use App\QueryFilters\DebrisTypeFilters;
use Illuminate\Http\Request;

class DebrisTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(DebrisTypeFilters $filters)
    {
        return DebrisTypeResource::collection(DebrisType::filterBy($filters)->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DebrisTypeRequest $request)
    {
        $validator = $request->validated();
        $record = DebrisType::create($validator);

        return new DebrisTypeResource($record);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DebrisType  $debrisType
     * @return \Illuminate\Http\Response
     */
    public function show(DebrisType $debrisType)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DebrisType  $debrisType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DebrisType $debrisType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DebrisType  $debrisType
     * @return \Illuminate\Http\Response
     */
    public function destroy(DebrisType $type)
    {
        $type->delete();

        return response()->noContent();
    }
}
