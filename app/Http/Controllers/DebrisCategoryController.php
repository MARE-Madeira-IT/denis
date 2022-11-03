<?php

namespace App\Http\Controllers;

use App\Http\Requests\DebrisCategoryRequest;
use App\Http\Resources\DebrisCategoryResource;
use App\Models\DebrisCategory;
use App\QueryFilters\DebrisCategoryFilters;
use Illuminate\Http\Request;

class DebrisCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(DebrisCategoryFilters $filters)
    {
        return DebrisCategoryResource::collection(DebrisCategory::filterBy($filters)->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DebrisCategoryRequest $request)
    {
        $validator = $request->validated();

        $record = DebrisCategory::create($validator);

        return new DebrisCategoryResource($record);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DebrisCategory  $debrisCategory
     * @return \Illuminate\Http\Response
     */
    public function show(DebrisCategory $debrisCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DebrisCategory  $debrisCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DebrisCategory $debrisCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DebrisCategory  $debrisCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(DebrisCategory $category)
    {
        $category->delete();

        return response()->noContent();
    }
}
