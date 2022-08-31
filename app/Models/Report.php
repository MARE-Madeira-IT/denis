<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cerbero\QueryFilters\FiltersRecords;

class Report extends Model
{
    use HasFactory;
    use FiltersRecords;

    protected $fillable = ["date", "latitude", "longitude", "notes", "ongoing_survey", "debris_id", "site_id"];

    public static function store($data)
    {
        return Report::create([
            "date" => $data["date"],
            "latitude" => $data["latitude"],
            "longitude" => $data["longitude"],
            "notes" => array_key_exists("notes", $data) ? $data["notes"] : null,
            "ongoing_survey" => array_key_exists("ongoing_survey", $data) ? $data["ongoing_survey"] : null,
            "site_id" => $data["site_id"],
            "debris_id" => $data["debris_id"],
        ]);
    }

    public function validation()
    {
        return $this->belongsToMany(Validation::class, 'report_has_validations', 'report_id', 'validation_id');
    }

    public function debris()
    {
        return $this->belongsTo(Debris::class, 'debris_id');
    }

    public function site()
    {
        return $this->belongsTo(Site::class);
    }

    public function taxas()
    {
        return $this->hasMany(Taxa::class);
    }
}
