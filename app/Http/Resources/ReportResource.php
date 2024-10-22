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
            'user' => $this->user,
            'date' => $this->date,
            'final_date' => $this->final_date,
            'date_type' => $this->date_type,
            'doi' => $this->doi,
            'title_publication' => $this->title_publication,
            'journal_publication' => $this->journal_publication,
            'year_publication' => $this->year_publication,
            'volume_publication' => $this->volume_publication,
            'pages_publication' => $this->pages_publication,
            'first_author' => $this->first_author,
            'authors' => $this->authors,
            'custom_id' => $this->custom_id,
            'status' => $this->validation,
            'ongoing_survey' => $this->ongoing_survey,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'notes' => $this->notes,
            'images' => $this->images,
            'site' =>  new SiteResource($this->site),
            'debris' => new DebrisResource($this->debris),
            'taxas' =>  TaxaResource::collection($this->taxas),
            'created_at' => $this->created_at,
        ];
    }
}
