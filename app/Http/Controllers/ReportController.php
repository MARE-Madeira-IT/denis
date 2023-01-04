<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReportRequest;
use App\Http\Resources\MinimalReportResource;
use App\Http\Resources\ReportResource;
use App\Models\Debris;
use App\Models\Report;
use App\Models\ReportHasValidation;
use App\Models\Site;
use App\Models\Taxa;
use App\QueryFilters\ReportFilters;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\Console\Output\ConsoleOutput;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ReportFilters $filters)
    {
        $user = auth()->user();
        $query = Report::filterBy($filters);
        // $out = new ConsoleOutput();
        // $out->writeln($user->hasRole('validator'));
        if (!$user->hasRole('validator') && !$user->hasRole('admin')) {
            $query = $query->where('user_id', auth()->user()->id)->orWhereHas('latestValidation', function ($q) {
                $q->where('validation_id', 2);
            });
        }
        return MinimalReportResource::collection($query->latest()->paginate(10));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function selfIndex(ReportFilters $filters)
    {
        return MinimalReportResource::collection(Report::filterBy($filters)->latest()->where('user_id', auth()->user()->id)->paginate(10));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function mapIndex(ReportFilters $filters)
    {
        return MinimalReportResource::collection(Report::filterBy($filters)->latest()->get());
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
    public function update(ReportRequest $request, Report $report)
    {
        $validator = $request->validated();
        $validator['validator_id'] = $validator['user_id'];
        $validator['user_id'] = $report->user_id;

        $site = $report->site;
        $site->update([
            "name" => $validator["site"],
            "region" => $validator["region"],
            "country_id" => $validator["country"],
            "lme_id" => $validator["lme"],
        ]);

        $debris = $report->debris;
        $debrisData = Debris::generateDataArray($validator);
        $debris->update($debrisData);

        $validator['site_id'] = $site->id;
        $validator['debris_id'] = $debris->id;
        $reportData = Report::generateDataArray($validator);
        $report->update($reportData);

        $validator["report_id"] = $report->id;
        $existingTaxas = $report->taxas()->get();
        foreach ($existingTaxas as $key => $taxa) {
            $taxa->delete();
        }
        Taxa::store($validator);


        $report->validation()->attach([1 => ['validator_id' => $validator['validator_id']]]);

        return new ReportResource($report);
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
