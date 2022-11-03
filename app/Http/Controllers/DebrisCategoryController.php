<?php

namespace App\Http\Controllers;

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
