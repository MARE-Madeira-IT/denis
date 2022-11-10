<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MinimalReportResource extends JsonResource
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
            'user' => $this->user,
            'status' => $this->validation,
            'date' => $this->date,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'notes' => $this->notes,
            'ongoing_survey' => $this->ongoing_survey,
            'site' =>  new SiteResource($this->site),
            'debris' => new MinimalDebrisResource($this->debris),
            'taxas' =>  MinimalTaxaResource::collection($this->taxas),
            'created_at' => $this->created_at,
        ];
    }
}
