<?php

namespace App\Http\Controllers;

use App\Exports\ReportExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportReportController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        return (new ReportExport)->download('reservas.csv', \Maatwebsite\Excel\Excel::CSV);
    }
}
