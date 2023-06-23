<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Symfony\Component\Console\Output\ConsoleOutput;

class Taxa extends Model
{
    use HasFactory;

    protected $fillable = [
        "authority",
        "year_first_report",
        "reference",
        "identification",
        "report_id",
        "taxa_level_id",
        "taxa_species_status_id",
        "taxa_population_status_id",
        "taxa_abundance_id",
        "taxa_viability_id",
        "asisk_score",
        "asisk_result",
    ];

    public static function store($data)
    {
        foreach ($data["taxas"] as $taxa) {
            $newTaxa = Taxa::create([
                "authority" => Arr::get($taxa, "authority"),
                "year_first_report" => Arr::get($taxa, "year_first_report"),
                "reference" => Arr::get($taxa, "reference"),
                "identification" => $taxa["identification"],
                "report_id" => $data["report_id"],
                "taxa_level_id" => Arr::get($taxa, "level"),
                "asisk_score" => Arr::get($taxa, "asisk_score"),
                "asisk_result" => Arr::get($taxa, "asisk_result"),
                "taxa_species_status_id" => Arr::get($taxa, "species_status"),
                "taxa_population_status_id" => Arr::get($taxa, "population_status"),
                "taxa_abundance_id" => Arr::get($taxa, "abundance"),
                "taxa_viability_id" => Arr::get($taxa, "viability"),
            ]);

            if (Arr::get($taxa, "native_region")) {
                $newTaxa->nativeRegions()->sync($taxa["native_region"]);
            }
            if (Arr::get($taxa, "maturity")) {
                $newTaxa->maturities()->sync($taxa["maturity"]);
            }
        }
    }
    public static function import($data, $report)
    {

        try {
            $has_species_status = Arr::get($data, 'species_status');
            $has_population_status = Arr::get($data, 'population_status');
            $has_abundance = Arr::get($data, 'species_abundance');
            $has_viability = Arr::get($data, 'viability');
            $has_taxonomic_level = Arr::get($data, 'highest_taxonomic_level');

            $newTaxa  = self::create([
                "taxa_level_id" => $has_taxonomic_level ? TaxaLevel::where('name', $data['highest_taxonomic_level'])->first()->id : null,
                "identification" => $data["identification"],
                "authority" => Arr::get($data, "authority"),
                "year_first_report" => Arr::get($data, "year_of_first_report"),
                "reference" => Arr::get($data, "reference"),
                "taxa_species_status_id" => $has_species_status ? TaxaSpeciesStatus::where('name', $has_species_status)->first()->id : null,
                "taxa_population_status_id" => $has_population_status ? TaxaPopulationStatus::where('name', $has_population_status)->first()->id : null,
                "taxa_abundance_id" => $has_abundance ? TaxaAbundance::where('name', $has_abundance)->first()->id : null,
                "taxa_viability_id" => $has_viability ? TaxaViability::where('name', $data['viability'])->first()->id : null,
                "report_id" =>  $report,
                "asisk_score" => Arr::get($data, "asisk_score"),
                "asisk_result" => Arr::get($data, "asisk_result"),
            ]);

            if (Arr::get($data, "maturity_stage")) {
                $maturities = explode(",", $data["maturity_stage"]);

                foreach ($maturities as $maturity) {
                    // $out = new ConsoleOutput();
                    // $out->writeln($maturity);
                    $newTaxa->maturities()->attach(TaxaMaturity::where('name', $maturity)->first()->id);
                }
            }

            if (Arr::get($data, "native_regions")) {
                $nativeRegions = explode(",", $data["native_regions"]);
                foreach ($nativeRegions as $nativeRegion) {
                    $newTaxa->nativeRegions()->attach(TaxaNativeRegion::where('name', $nativeRegion)->first()->id);
                }
            }

            return $newTaxa;
        } catch (\Throwable $th) {
            return false;
        }
    }

    public function maturities()
    {
        return $this->belongsToMany(TaxaMaturity::class, 'taxa_has_maturities');
    }

    public function level()
    {
        return $this->belongsTo(TaxaLevel::class, 'taxa_level_id');
    }

    public function abundance()
    {
        return $this->belongsTo(TaxaAbundance::class, 'taxa_abundance_id');
    }

    public function nativeRegions()
    {
        return $this->belongsToMany(TaxaNativeRegion::class, 'taxa_has_native_regions');
    }

    public function viability()
    {
        return $this->belongsTo(TaxaViability::class, 'taxa_viability_id');
    }

    public function speciesStatus()
    {
        return $this->belongsTo(TaxaSpeciesStatus::class, 'taxa_species_status_id');
    }

    public function populationStatus()
    {
        return $this->belongsTo(TaxaPopulationStatus::class, 'taxa_population_status_id');
    }

    public function reports()
    {
        return $this->belongsTo(Report::class, 'report_id');
    }
}
