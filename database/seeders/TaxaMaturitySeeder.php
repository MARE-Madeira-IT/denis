<?php

namespace Database\Seeders;

use App\Models\TaxaMaturity;
use Illuminate\Database\Seeder;

class TaxaMaturitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['name' => 'egg'],
            ['name' => 'larvae'],
            ['name' => 'juvenile'],
            ['name' => 'mature'],
        ];

        foreach ($items as $item) {
            TaxaMaturity::create($item);
        }
    }
}
