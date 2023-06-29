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
    private $filters;

    public function __construct($aFilters)
    {
        $this->filters = $aFilters;
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Report::filterBy($this->filters)->with([
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
            'DOI',
            'Date',
            'Site',
            'Country',
            'Region',
            'LME',
            'Latitude',
            'Longitude',
            'Ongoing Surveys',
            'If yes specify the modality',

            'Debris type',
            'If seafloor specify depth (m)',
            'Habitat of the finding',
            'Debris size class',
            'Debris weight (Kg)',
            'Debris stiffness',
            'Debris surface rugosity',
            'Debris category',
            'Debris subcategory',
            'Debris identification marks',
            'Probable debris origin',

            'Highest taxonomic level',
            'Identification',
            'Authority',
            'Year of first report',
            'Reference',
            'Species status',
            'Population status',
            'Species abundance',
            'Viability',
            'Maturity stage',
            'Native regions',


            'Asisk score',
            'Asisk result',
            'Notes',
        ];
    }

    public function map($record): array
    {
        $out = new ConsoleOutput();
        $out->writeln($record->latestValidation->validation_id);
        $response = [];
        $init = [
            $record->id,
            $record->latestValidation->validation_id == 2 ? "Approved" : ($record->latestValidation->validation_id == 1 ? "Pending" : "Rejected"),
            $record->custom_id,
            $record->doi,
            $record->date,
            $record->site->name,
            $record->site->region,
            $record->site->country_id ? $record->site->country->name : "",
            $record->site->lme_id ? $record->site->lme->name : "",
            $record->latitude,
            $record->longitude,
            $record->ongoing_survey ? "Yes" : "No",
            $record->ongoing_survey,

            $record->debris->type->name,
            $record->debris->type->depth,
            $record->debris->habitat->name,
            $record->debris->size->name,
            $record->debris->weight,
            $record->debris->thickness_id ? $record->debris->thickness->name : "---",
            $record->debris->rugosity_id ? $record->debris->rugosity->name : "---",
            $record->debris->category->name,
            $record->debris->subcategory_id ? $record->debris->subcategory->mdi_code : "---",
            $record->debris->marks,
            $record->debris->origin,
        ];

        $taxas = $record->taxas;

        foreach ($taxas as $taxa) {
            $maturityString = "";
            $nativeRegionString = "";

            foreach ($taxa->nativeRegions as $nativeRegion) {
                $nativeRegionString = $nativeRegionString . $nativeRegion->name . ", ";
            }

            foreach ($taxa->maturities as $maturity) {
                $maturityString = $maturityString . $maturity->name . ", ";
            }

            $newData = [
                $taxa->level->name,
                $taxa->identification,
                $taxa->authority ? $taxa->authority : "---",
                $taxa->year_first_report ? $taxa->year_first_report : "---",
                $taxa->reference ? $taxa->reference : "---",
                $taxa->taxa_species_status_id ?  $taxa->speciesStatus->name : "---",
                $taxa->taxa_population_status_id ? $taxa->populationStatus->name : "---",
                $taxa->abundance_id ? $taxa->abundance->name : "---",
                $taxa->viability ? $taxa->viability->name : "---",
                $maturityString,
                $nativeRegionString,
                $taxa->asisk_score,
                $taxa->asisk_result,
                $record->notes,
            ];

            array_push($response, array_merge($init, $newData));
        }

        return $response;
    }

    public function title(): string
    {
        return 'Reports';
    }
}
