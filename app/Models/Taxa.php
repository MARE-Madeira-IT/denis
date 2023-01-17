<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

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
                "taxa_level_id" => $taxa["level"],
                "taxa_species_status_id" => $taxa["species_status"],
                "taxa_population_status_id" => $taxa["population_status"],
                "taxa_abundance_id" => $taxa["abundance"],
                "taxa_viability_id" => $taxa["viability"],
            ]);

            $newTaxa->nativeRegions()->sync($taxa["native_region"]);
            $newTaxa->maturities()->sync($taxa["maturity"]);
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
