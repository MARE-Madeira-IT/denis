<?php

namespace App\Jobs;

use App\Imports\ReportImport;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Maatwebsite\Excel\Facades\Excel;
use Symfony\Component\Console\Output\ConsoleOutput;

class UploadCollection implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $collection;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($aCollection)
    {
        $this->collection = $aCollection;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->collection->startUpload = Carbon::now();
        $this->collection->save();
        Excel::import(new ReportImport($this->collection), storage_path('app/collections/' . $this->collection->path));
    }
}
