<?php

namespace App\Imports;

use App\Models\CollectionError;
use App\Models\Debris;
use App\Models\Report;
use App\Models\Site;
use App\Models\Taxa;
use Carbon\Carbon;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Symfony\Component\Console\Output\ConsoleOutput;

class ReportImport implements ToCollection, WithHeadingRow
{
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


    public function collection(Collection $rows)
    {
        $identifiers = [
            "identifier" => null,
        ];

        foreach ($rows as $row) {
            // $out = new ConsoleOutput();
            // $out->writeln($row);
            $identifier = $row["date"] .
                $row["latitude"] . $row["longitude"] .
                $row["debris_category"] . $row["debris_subcategory"];

            $keyExists = Arr::get($identifiers, $identifier);

            if (!$keyExists) {
                $debris = Debris::import($row);
                if (!$debris) {
                    CollectionError::create(["row" => $row, 'collection_id' => $this->collection->id]);
                    continue;
                }
                $site = Site::import($row);
                if (!$site) {
                    CollectionError::create(["row" => $row, 'collection_id' => $this->collection->id]);
                    continue;
                }

                $report = Report::import($row, $this->collection, $debris->id, $site->id);
                if (!$report) {
                    CollectionError::create(["row" => $row, 'collection_id' => $this->collection->id]);
                    continue;
                }
                $report->validation()->attach(2);

                $identifiers[$identifier] = $report->id;
            }

            $taxa = Taxa::import($row, $identifiers[$identifier]);
            if (!$taxa) {
                CollectionError::create(["row" => $row, 'collection_id' => $this->collection->id,  'report_id' => $identifiers[$identifier]]);
                continue;
            }
        }

        $this->collection->endUpload = Carbon::now();
        $this->collection->save();
    }
}
