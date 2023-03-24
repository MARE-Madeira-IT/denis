<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TaxaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'authority' => $this->authority,
            'year_first_report' => $this->year_first_report,
            'reference' => $this->reference,
            'identification' => $this->identification,
            'speciesStatus' => $this->speciesStatus,
            'populationStatus' => $this->populationStatus,
            'asisk_score' => $this->asisk_score,
            'asisk_result' => $this->asisk_result,
            'level' => [
                'id' => $this->level->id,
                'name' => $this->level->name
            ],
            'abundance' => $this->abundance,
            'viability' => [
                'id' => $this->viability->id,
                'name' => $this->viability->name
            ],
            'nativeRegions' => $this->nativeRegions,
            'maturities' => $this->maturities,
        ];
    }
}
