<?php

namespace App\Http\Controllers;

use App\Http\Requests\DebrisSubCategoryRequest;
use App\Http\Resources\DebrisSubCategoryResource;
use App\Models\DebrisSubCategory;
use App\QueryFilters\DebrisSubCategoryFilters;
use Illuminate\Http\Request;

class DebrisSubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(DebrisSubCategoryFilters $filters)
    {
        return DebrisSubCategoryResource::collection(DebrisSubCategory::filterBy($filters)->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DebrisSubCategoryRequest $request)
    {
        $validator = $request->validated();
        $record = DebrisSubCategory::create([
            'name' => $request->name,
            'mdi_code' => $request->mdi_code,
            'debris_category_id' => $request->debris_category_id[0]
        ]);

        return new DebrisSubCategoryResource($record);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DebrisSubCategory  $debrisSubCategory
     * @return \Illuminate\Http\Response
     */
    public function show(DebrisSubCategory $debrisSubCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DebrisSubCategory  $debrisSubCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(DebrisSubCategory $debrisSubCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DebrisSubCategory  $debrisSubCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DebrisSubCategory $debrisSubCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DebrisSubCategory  $debrisSubCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(DebrisSubCategory $subcategory)
    {
        $subcategory->delete();

        return response()->noContent();
    }
}
