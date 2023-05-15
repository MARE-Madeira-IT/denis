<?php

namespace App\Http\Controllers;

use App\Http\Requests\CollectionRequest;
use App\Http\Resources\CollectionResource;
use App\Imports\ReportImport;
use App\Jobs\UploadCollection;
use App\Models\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Maatwebsite\Excel\Facades\Excel;

class CollectionController extends Controller
{
    public function success()
    {
        return response()->json([
            'success' => true,
        ], 201);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CollectionResource::collection(Collection::paginate(10));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function selfIndex()
    {
        return CollectionResource::collection(Collection::latest()->where('user_id', auth()->user()->id)->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CollectionRequest $request)
    {
        $validator = $request->validated();
        $record = Collection::create($validator);

        if (Arr::get($validator, 'file')) {
            $fileName = time() . '.csv';

            $validator['file']->move(storage_path('app/collections'), $fileName);
            $record->path = $fileName;
            $record->save();
        }
        // Excel::import(new ReportImport($record), storage_path('app/collections/' . $record->path));
        UploadCollection::dispatch($record)->delay(now()->addSeconds(3));
        return new CollectionResource($record);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Collection  $collection
     * @return \Illuminate\Http\Response
     */
    public function show(Collection $collection)
    {
        return new CollectionResource($collection);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Collection  $collection
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Collection $collection)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Collection  $collection
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Collection $collection)
    {
        $user = null;
        if ($request->header('Authorization')) {
            $user = auth()->user();

            if ($user) {
                if ($user->hasRole('admin') || $user->id == $collection->user_id) {
                    $collection->delete();
                }
            }
        }


        return response()->noContent();
    }
}
