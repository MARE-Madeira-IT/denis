<?php

namespace Database\Seeders;

use App\Models\TaxaSpeciesStatus;
use Illuminate\Database\Seeder;

class TaxaSpeciesStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['name' => 'nis'],
            ['name' => 'cryptogenic'],
            ['name' => 'range expansion'],
            ['name' => 'unresolved'],
            ['name' => 'unknown'],
        ];

        foreach ($items as $item) {
            TaxaSpeciesStatus::create($item);
        }
    }
}
