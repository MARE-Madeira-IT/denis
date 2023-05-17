<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

class Debris extends Model
{
    use HasFactory;
    protected $fillable = [
        "depth",
        "debris_type_id",
        "debris_habitat_id",
        "debris_size_id",
        "weight",
        "debris_thickness_id",
        "debris_rugosity_id",
        "debris_subcategory_id",
        "marks",
        "origin",
        "otherHabitat",
        "otherRugosity",
        "debris_category_id"
    ];

    public static function generateDataArray($data)
    {
        return [
            "depth" => Arr::get($data, "debris_depth"),
            "debris_habitat_id" => $data["debris_habitat"],
            "debris_type_id" => $data["debris_type"],
            "debris_size_id" => $data["debris_size"],
            "weight" => Arr::get($data, "debris_weight"),
            "debris_thickness_id" => Arr::get($data, "debris_thickness"),
            "debris_rugosity_id" => Arr::get($data, "debris_rugosity"),
            "debris_subcategory_id" => count($data["debris_sub_category"]) == 2 ? $data["debris_sub_category"][1] : null,
            "debris_category_id" => $data["debris_sub_category"][0],
            "marks" => Arr::get($data, "debris_marks"),
            "origin" => Arr::get($data, "debris_origin"),
            "otherHabitat" => Arr::get($data, "debris_otherHabitat"),
            "otherRugosity" => Arr::get($data, "debris_otherRugosity"),
        ];
    }


    public static function store($data)
    {
        return self::create([
            "depth" => Arr::get($data, "debris_depth"),
            "debris_habitat_id" => $data["debris_habitat"],
            "debris_type_id" => $data["debris_type"],
            "debris_size_id" => $data["debris_size"],
            "debris_image" => Arr::get($data, "debris_image"),
            "weight" => Arr::get($data, "debris_weight"),
            "debris_thickness_id" => Arr::get($data, "debris_thickness"),
            "debris_rugosity_id" => Arr::get($data, "debris_rugosity"),
            "debris_subcategory_id" => count($data["debris_sub_category"]) == 2 ? $data["debris_sub_category"][1] : null,
            "debris_category_id" => $data["debris_sub_category"][0],
            "marks" => Arr::get($data, "debris_marks"),
            "origin" => Arr::get($data, "debris_origin"),
            "otherHabitat" => Arr::get($data, "debris_otherHabitat"),
            "otherRugosity" => Arr::get($data, "debris_otherRugosity"),
        ]);
    }

    public static function import($data)
    {

        try {
            $has_habitat = Arr::get($data, 'habitat_of_the_finding');
            $rugosity = DebrisHabitat::where('name', $data["debris_surface_rugosity"])->first();
            $has_subcategory = Arr::get($data, 'debris_subcategory');

            return self::create([
                "debris_type_id" => DebrisType::where('name', $data["debris_type"])->first()->id,
                "depth" => Arr::get($data, 'if_seafloor_specify_depth_(m)'),
                "debris_habitat_id" => $has_habitat ? DebrisHabitat::where('name', $has_habitat)->first()->id : 12,
                "otherHabitat" => $has_habitat ? null : $data["if_other_habitat_specify"],
                "debris_size_id" => DebrisSize::where('name', $data["debris_size_class"])->first()->id,
                "weight" => Arr::get($data, "debris_weight_(kg)"),
                "debris_thickness_id" => DebrisThickness::where('name', $data["debris_thickness"])->first()->id,
                "debris_rugosity_id" => $rugosity ? $rugosity->id : 7,
                "otherRugosity" => $rugosity ? null : $data["if_other_rugosity_specify"],
                "marks" => Arr::get($data, "debris_identification_marks"),
                "origin" => Arr::get($data, "probable_debris_origin"),
                "debris_category_id" => DebrisCategory::where('name', $data["debris_category"])->first()->id,
                "debris_subcategory_id" => $has_subcategory ? DebrisSubCategory::where('mdi_code', $data["debris_subcategory"])->first()->id : null,
            ]);
        } catch (\Throwable $th) {
            return false;
        }
    }

    public function material()
    {
        return $this->belongsTo(DebrisMaterial::class, 'debris_material_id');
    }

    public function type()
    {
        return $this->belongsTo(DebrisType::class, 'debris_type_id');
    }

    public function category()
    {
        return $this->belongsTo(DebrisCategory::class, 'debris_category_id');
    }

    public function subcategory()
    {
        return $this->belongsTo(DebrisSubCategory::class, 'debris_subcategory_id');
    }

    public function size()
    {
        return $this->belongsTo(DebrisSize::class, 'debris_size_id');
    }

    public function thickness()
    {
        return $this->belongsTo(DebrisThickness::class, 'debris_thickness_id');
    }

    public function habitat()
    {
        return $this->belongsTo(DebrisHabitat::class, 'debris_habitat_id');
    }

    public function rugosity()
    {
        return $this->belongsTo(DebrisRugosity::class, 'debris_rugosity_id');
    }

    public function report()
    {
        return $this->hasOne(Report::class);
    }
}
