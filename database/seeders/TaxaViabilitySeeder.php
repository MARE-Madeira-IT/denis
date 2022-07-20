<?php

namespace Database\Seeders;

use App\Models\TaxaViability;
use Illuminate\Database\Seeder;

class TaxaViabilitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['name' => 'alive'],
            ['name' => 'dead'],
        ];

        foreach ($items as $item) {
            TaxaViability::create($item);
        }
    }
}
