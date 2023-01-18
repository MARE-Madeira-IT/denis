<?php

namespace App\Http\Controllers;

use App\Models\Report;
use App\QueryFilters\ReportFilters;
use Carbon\Carbon;
use Illuminate\Http\Request;

class FetchReportGraph extends Controller
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
        
        $reports = $query->orderBy('date')->get();

        $response = [];

        foreach ($reports as $key => $report) {
            $date = Carbon::parse($report->date)->format('m-Y');
            if (array_key_exists($date, $response)) {
                $response[$date] = $response[$date] + 1;
            } else {
                $response[$date] = 1;
            }
        }

        return $response;
    }
}
