<?php

namespace App\Http\Controllers;

use App\Exports\ReportExport;
use App\QueryFilters\ReportFilters;

class ExportReportController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(ReportFilters $filters)
    {
        return (new ReportExport($filters))->download('reservas.csv', \Maatwebsite\Excel\Excel::CSV);
    }
}
