<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReportRequest;
use App\Http\Resources\MinimalReportResource;
use App\Http\Resources\ReportResource;
use App\Models\Debris;
use App\Models\Report;
use App\Models\Site;
use App\Models\Taxa;
use App\QueryFilters\ReportFilters;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ReportFilters $filters)
    {
        return MinimalReportResource::collection(Report::filterBy($filters)->paginate(10));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function selfIndex(ReportFilters $filters)
    {
        return MinimalReportResource::collection(Report::filterBy($filters)->where('user_id', auth()->user()->id)->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ReportRequest $request)
    {
        $validator = $request->validated();

        try {
            DB::beginTransaction();

            $debris = Debris::store($validator);

            $site = Site::create([
                "name" => $validator["site"],
                "region" => $validator["region"],
                "country_id" => $validator["country"],
                "lme_id" => $validator["lme"],
            ]);

            $validator["site_id"] = $site->id;
            $validator["debris_id"] = $debris->id;

            $report = Report::store($validator);
            $report->validation()->attach(1);

            $validator["report_id"] = $report->id;

            Taxa::store($validator);

            DB::commit();

            return new MinimalReportResource($report);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response([
                'message' => $th->getMessage(),
                'status' => 'failed'
            ], 400);
        }



        return $validator;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Report  $report
     * @return \Illuminate\Http\Response
     */
    public function show(Report $report)
    {
        return new ReportResource($report);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Report  $report
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Report $report)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Report  $report
     * @return \Illuminate\Http\Response
     */
    public function destroy(Report $report)
    {
        //
    }
}
