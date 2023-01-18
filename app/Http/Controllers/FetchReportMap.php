<?php

namespace App\Http\Controllers;

use App\Http\Resources\MinimalReportResource;
use App\Models\Report;
use App\QueryFilters\ReportFilters;
use Illuminate\Http\Request;

class FetchReportMap extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(ReportFilters $filters)
    {
        $user = auth()->user();
        $query = Report::filterBy($filters);

        if (!$user->hasRole('validator') && !$user->hasRole('admin')) {
            $query = $query->where('user_id', auth()->user()->id)->orWhereHas('latestValidation', function ($q) {
                $q->where('validation_id', 2);
            });
        }

        return  MinimalReportResource::collection($query->get());
    }
}
