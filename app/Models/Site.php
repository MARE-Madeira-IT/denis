<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

class Site extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'region', 'country_id', 'lme_id'];

    public function country()
    {
        return $this->belongsTo("App\Models\Country");
    }

    public function lme()
    {
        return $this->belongsTo("App\Models\Lme");
    }

    public static function import($data)
    {
        $has_lme = Arr::get($data, 'lme');

        try {
            return self::create([
                "name" => $data['site'],
                "region" => $data['region'],
                "country_id" => Country::where('name', $data['country'])->first()->id,
                "lme_id" => $has_lme ? Lme::where('name', $data["lme"])->first()->id : null,
            ]);
        } catch (\Throwable $th) {
            return false;
        }
    }
}
