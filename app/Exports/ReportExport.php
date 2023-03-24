<?php

namespace App\Exports;

use App\Models\Report;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithTitle;
use Symfony\Component\Console\Output\ConsoleOutput;

class ReportExport implements FromCollection, WithHeadings, WithMapping, WithTitle
{
    use Exportable;

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Report::with([
            'latestValidation',
            'site.country',
            'site.lme',
            'debris.subcategory.category',
            'taxas.speciesStatus',
            'taxas.level',
            'taxas.maturities',
            'taxas.abundance',
            'taxas.nativeRegions',
            'taxas.viability',
            'taxas.populationStatus'
        ])->get();
    }

    public function headings(): array
    {

        return [
            'ID',
            'Status',
            'Custom ID',
            'Date of survey (dd-mm-yyyy)',
            'Localization',
            'Ongoing Surveys',
            'Latitude',
            'Longitude',
            'Notes',
            'DOI',

            'Debris type',
            'Depth (m)',
            'Habitat of the finding',
            'Debris size class',
            'Debris weight (Kg)',
            'Debris stiffness',
            'Debris surface rugosity',
            'Litter category',
            'Litter sub category',
            'Debris identification marks',
            'Probable debris origin',
        ];
    }

    public function map($record): array
    {
        $out = new ConsoleOutput();
        $out->writeln($record->latestValidation->validation_id);

        $response = [
            $record->id,
            $record->latestValidation->validation_id == 2 ? "Approved" : ($record->latestValidation->validation_id == 1 ? "Pending" : "Rejected"),
            $record->custom_id,
            $record->date,
            $record->site->name . ", " . $record->site->region . ", " . ($record->site->country_id ? $record->site->country->name : "") . ", " . ($record->site->lme_id ? $record->site->lme->name : ""),
            $record->ongoing_survey,
            $record->latitude,
            $record->longitude,
            $record->notes,
            $record->doi,

            $record->debris->type->name,
            $record->debris->type->depth,
            $record->debris->habitat->name,
            $record->debris->size->name,
            $record->debris->weight,
            $record->debris->thickness_id ? $record->debris->thickness->name : "---",
            $record->debris->rugosity_id ? $record->debris->rugosity->name : "---",
            $record->debris->category->name,
            $record->debris->subcategory_id ? $record->debris->subcategory->name : "---",
            $record->debris->marks,
            $record->debris->origin,
        ];


        $taxas = $record->taxas;

        foreach ($taxas as $taxa) {
            $newData =
                [
                    'taxonomic level' => $taxa->level->name,
                    'identification' => $taxa->identification,
                    'asisk score' => $taxa->asisk_score,
                    'asisk result' => $taxa->asisk_result,
                    'authority' => $taxa->authority ? $taxa->authority : "---",
                    'species status' => $taxa->taxa_species_status_id ?  $taxa->speciesStatus->name : "---",
                    'year of the first record' => $taxa->year_first_report ? $taxa->year_first_report : "---",
                    'reference' => $taxa->reference ? $taxa->reference : "---",
                    'population status' => $taxa->taxa_population_status_id ? $taxa->populationStatus->name : "---",
                    'species abundance' => $taxa->abundance_id ? $taxa->abundance->name : "---",
                    'viability' => $taxa->viability->name,
                    'native regions' => [],
                    'maturity' => [],
                ];



            foreach ($taxa->nativeRegions as $nativeRegion) {
                array_push($newData['native regions'], $nativeRegion->name);
            }

            foreach ($taxa->maturities as $maturity) {
                array_push($newData['maturity'], $maturity->name);
            }

            array_push($response, $newData);
        }

        return $response;
    }

    public function title(): string
    {
        return 'Reports';
    }
}
