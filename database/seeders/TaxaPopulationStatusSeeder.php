<?php

namespace Database\Seeders;

use App\Models\TaxaPopulationStatus;
use Illuminate\Database\Seeder;

class TaxaPopulationStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['name' => 'not established'],
            ['name' => 'established'],
            ['name' => 'undetermined'],
        ];

        foreach ($items as $item) {
            TaxaPopulationStatus::create($item);
        }
    }
}
