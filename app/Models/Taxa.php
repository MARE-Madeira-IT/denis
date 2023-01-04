<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
        "taxa_native_region_id",
    ];

    public static function store($data)
    {

        foreach ($data["taxas"] as $taxa) {
            $newTaxa = Taxa::create([
                "authority" => array_key_exists("authority", $taxa) ? $taxa["authority"] : null,
                "year_first_report" => array_key_exists("year_first_report", $taxa) ? $taxa["year_first_report"] : null,
                "reference" => array_key_exists("reference", $taxa) ? $taxa["reference"] : null,
                "identification" => $taxa["identification"],
                "report_id" => $data["report_id"],
                "taxa_level_id" => $taxa["level"],
                "taxa_species_status_id" => $taxa["species_status"],
                "taxa_population_status_id" => $taxa["population_status"],
                "taxa_abundance_id" => $taxa["abundance"],
                "taxa_viability_id" => $taxa["viability"],
                "taxa_native_region_id" => $taxa["native_region"],
            ]);

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

    public function nativeRegion()
    {
        return $this->belongsTo(TaxaNativeRegion::class, 'taxa_native_region_id');
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
