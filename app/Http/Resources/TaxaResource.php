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
            'speciesStatus' => [
                'id' => $this->speciesStatus->id,
                'name' => $this->speciesStatus->name
            ],
            'populationStatus' => [
                'id' => $this->populationStatus->id,
                'name' => $this->populationStatus->name
            ],
            'level' => [
                'id' => $this->level->id,
                'name' => $this->level->name
            ],
            'abundance' => [
                'id' => $this->abundance->id,
                'name' => $this->abundance->name
            ],
            'viability' => [
                'id' => $this->viability->id,
                'name' => $this->viability->name
            ],
            'nativeRegion' => [
                'id' => $this->nativeRegion->id,
                'name' => $this->nativeRegion->name
            ],
            'maturities' => $this->maturities,
        ];
    }
}
