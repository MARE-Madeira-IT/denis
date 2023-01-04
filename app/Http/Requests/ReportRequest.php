<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Symfony\Component\Console\Output\ConsoleOutput;

class ReportRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if ($this->header('Authorization'))
            return auth()->user()->id;
    }

    protected function prepareForValidation()
    {
        $otherHabitat = "";
        $habitat = $this->debris_habitat;
        $otherMaterial = "";
        $material = $this->debris_material;
        $otherRugosity = "";
        $rugosity = $this->debris_rugosity;

        if (gettype($this->debris_habitat) == "string") {
            $habitat = 12;
            $otherHabitat = $this->debris_habitat;
        }

        if (gettype($this->debris_material) == "string") {
            $material = 12;
            $otherMaterial = $this->debris_material;
        }

        if (gettype($this->debris_rugosity) == "string") {
            $rugosity = 7;
            $otherRugosity = $this->debris_rugosity;
        }
        $output = new ConsoleOutput();
        $output->writeln($otherRugosity);
        $this->merge([
            'user_id' => auth()->user()->id,
            'debris_habitat' => $habitat,
            'debris_otherHabitat' => $otherHabitat,
            'debris_material' => $material,
            'debris_otherMaterial' => $otherMaterial,
            'debris_rugosity' => $rugosity,
            'debris_otherRugosity' => $otherRugosity,
            'debris_depth' => $this->debris_depth == "" ? 0 : $this->debris_depth,
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id' => 'required|integer|exists:users,id',
            'country' => 'required|integer|exists:countries,id',
            'lme' => 'required|integer|exists:lmes,id',
            'region' => 'required',
            'site' => 'required',
            'notes' => 'nullable',
            'ongoing_survey' => 'nullable',
            'date' => 'required|date',
            'latitude' => ['required', 'regex:/^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,20})?))$/'],
            'longitude' => ['required', 'regex:/^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,20})?))$/'],

            'debris_type' => 'required|integer|exists:debris_types,id',
            'debris_depth' => 'required_if:debris_type,2|numeric',
            'debris_habitat' => 'required|integer|exists:debris_habitats,id',
            'debris_material' => 'required|integer|exists:debris_materials,id',
            'debris_size' => 'required|integer|exists:debris_sizes,id',
            'debris_weight' => 'nullable|numeric',
            'debris_thickness' => 'required|integer|exists:debris_thicknesses,id',
            'debris_rugosity' => 'required|integer|exists:debris_rugosities,id',
            'debris_sub_category' => 'required|array|size:2',
            'debris_sub_category.0' => 'required|integer|exists:debris_categories,id',
            'debris_sub_category.1' => 'required|integer|exists:debris_sub_categories,id',
            'debris_marks' => 'nullable|string',
            'debris_origin' => 'nullable|string',
            'debris_otherHabitat' => 'required_without:debris_habitat|string',
            'debris_otherMaterial' => 'required_without:debris_material|string',
            'debris_otherRugosity' => 'required_without:debris_rugosity|string',

            'taxas' => 'required|array|min:1',
            'taxas.*.level' => 'required|integer|exists:taxa_levels,id',
            'taxas.*.identification' => 'required|string',
            'taxas.*.authority' => 'nullable|string',
            'taxas.*.year_first_report' => 'nullable|string',
            'taxas.*.species_status' => 'required|integer|exists:taxa_species_statuses,id',
            'taxas.*.population_status' => 'required|integer|exists:taxa_population_statuses,id',
            'taxas.*.abundance' => 'required|integer|exists:taxa_abundances,id',
            'taxas.*.viability' => 'required|integer|exists:taxa_viabilities,id',
            'taxas.*.maturity' => 'required|array|min:1',
            'taxas.*.maturity.*' => 'required|integer|exists:taxa_maturities,id',
            'taxas.*.native_region' => 'required|integer|exists:taxa_native_regions,id',
        ];
    }

    /**
     * Custom message for validation
     *
     * @return array
     */
    public function messages()
    {
        return [
            'latitude.regex' => 'The latitude format is invalid. Latitude range from -90 to 90',
            'longitude.regex' => 'The longitude format is invalid. Longitude range from -180 to 80',
            'name.required' => 'Reservation requires a reservation name',
            'email.required' => 'Reservation requires a contact email',
            'address.required' => 'Pickup address is required',
            'person.size' => 'Information for all participants is required',
            'person.*.birthday.required' => 'Birthday for all participants is required',
            'person.*.gender.required' => 'Gender for all participants is required',
            'person.*.height.required' => 'Height for all participants is required',
            'person.*.shoe.required' => 'Show size for all participants is required',
            'person.*.weight.required' => 'Weight for all participants is required',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'errors' => $validator->errors()
        ], 422));
    }
}
