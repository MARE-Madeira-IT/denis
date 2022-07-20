<?php

namespace Database\Seeders;

use App\Models\TaxaLevel;
use Illuminate\Database\Seeder;

class TaxaLevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['name' => 'phylum'],
            ['name' => 'class'],
            ['name' => 'order'],
            ['name' => 'family'],
            ['name' => 'genus'],
            ['name' => 'species'],
        ];

        foreach ($items as $item) {
            TaxaLevel::create($item);
        }
    }
}
