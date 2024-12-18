<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Support\Arr;

class Report extends Model
{
    use HasFactory;
    use FiltersRecords;

    protected $fillable = [
        "user_id", "custom_id",
        "date", "date_type", "final_date", "latitude", "longitude",
        "doi", "notes", "ongoing_survey", "debris_id",
        "site_id", "collection_id", "title_publication",
        "journal_publication",
        "year_publication",
        "volume_publication",
        "pages_publication",
        "first_author",
        "authors",
    ];

    public static function generateDataArray($data)
    {
        return [
            "user_id" => $data["user_id"],
            "custom_id" => array_key_exists("custom_id", $data) ? $data["custom_id"] : null,
            "date" => $data["date"],
            "date_type" => $data['date_type'],
            "final_date" => Arr::get($data, "final_date"),
            "doi" => Arr::get($data, 'doi'),
            "title_publication" => Arr::get($data, 'title_publication'),
            "journal_publication" => Arr::get($data, 'journal_publication'),
            "year_publication" => Arr::get($data, 'year_publication'),
            "volume_publication" => Arr::get($data, 'volume_publication'),
            "pages_publication" => Arr::get($data, 'pages_publication'),
            "first_author" => Arr::get($data, 'first_author'),
            "authors" => Arr::get($data, 'authors'),
            "latitude" => $data["latitude"],
            "longitude" => $data["longitude"],
            "notes" => array_key_exists("notes", $data) ? $data["notes"] : null,
            "ongoing_survey" => array_key_exists("ongoing_survey", $data) ? $data["ongoing_survey"] : null,
            "site_id" => $data["site_id"],
            "debris_id" => $data["debris_id"],
        ];
    }

    public static function store($data)
    {
        return Report::create([
            "user_id" => $data["user_id"],
            "custom_id" => array_key_exists("custom_id", $data) ? $data["custom_id"] : null,
            "date" => $data["date"],
            "date_type" => $data['date_type'],
            "final_date" => Arr::get($data, "final_date"),
            "doi" => Arr::get($data, 'doi'),
            "title_publication" => Arr::get($data, 'title_publication'),
            "journal_publication" => Arr::get($data, 'journal_publication'),
            "year_publication" => Arr::get($data, 'year_publication'),
            "volume_publication" => Arr::get($data, 'volume_publication'),
            "pages_publication" => Arr::get($data, 'pages_publication'),
            "first_author" => Arr::get($data, 'first_author'),
            "authors" => Arr::get($data, 'authors'),
            "latitude" => $data["latitude"],
            "longitude" => $data["longitude"],
            "notes" => array_key_exists("notes", $data) ? $data["notes"] : null,
            "ongoing_survey" => array_key_exists("ongoing_survey", $data) ? $data["ongoing_survey"] : null,
            "site_id" => $data["site_id"],
            "debris_id" => $data["debris_id"],
        ]);
    }

    public static function import($data, $collection, $debris, $site)
    {
        try {
            return self::create([
                "user_id" => $collection->user_id,
                "collection_id" => $collection->id,
                "doi" => $collection->doi ? $collection->doi : null,
                "date" => Carbon::parse($data['date']),
                "date_type" => $data['date_type'],
                "final_date" => Arr::get($data, "final_date") ? Carbon::parse($data['final_date']) : null,
                "latitude" => $data['latitude'],
                "longitude" => $data['longitude'],
                "notes" => Arr::get($data, "notes"),
                "ongoing_survey" => Arr::get($data, "if_yes_specify_the_modality"),
                "site_id" => $site,
                "debris_id" => $debris,
            ]);
        } catch (\Throwable $th) {

            return false;
        }
    }

    public function validation()
    {
        return $this->belongsToMany(Validation::class, 'report_has_validations', 'report_id', 'validation_id')->withPivot('validator_id')->withTimestamps();
    }

    /**
     * Get the user's most recent order.
     */
    public function latestValidation()
    {
        return $this->hasOne(ReportHasValidation::class)->latestOfMany();
    }

    public function collection()
    {
        return $this->belongsTo(Collection::class, 'collection_id');
    }

    public function debris()
    {
        return $this->belongsTo(Debris::class, 'debris_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function site()
    {
        return $this->belongsTo(Site::class);
    }

    public function taxas()
    {
        return $this->hasMany(Taxa::class);
    }

    public function images()
    {
        return $this->hasMany(ReportImage::class);
    }
}
