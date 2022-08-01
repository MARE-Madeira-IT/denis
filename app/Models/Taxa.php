<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Taxa extends Model
{
    use HasFactory;

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
