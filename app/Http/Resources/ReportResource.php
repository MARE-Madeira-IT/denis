<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReportResource extends JsonResource
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
            'date' => $this->date,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'notes' => $this->notes,
            'ongoing_survey' => $this->ongoing_survey,
            'site' =>  new SiteResource($this->site),
            'debris' => new DebrisResource($this->debris),
            'taxa' =>  new TaxaResource($this->taxa),
            'created_at' => $this->created_at,
        ];
    }
}
