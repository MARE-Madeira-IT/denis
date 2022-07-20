<?php

namespace Database\Seeders;

use App\Models\TaxaAbundance;
use Illuminate\Database\Seeder;

class TaxaAbundanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['name' => '1'],
            ['name' => '2-5'],
            ['name' => '6-10'],
            ['name' => '11-50'],
            ['name' => '<10%'],
            ['name' => '10-30%'],
            ['name' => '30-50%'],
            ['name' => '>50%'],
        ];

        foreach ($items as $item) {
            TaxaAbundance::create($item);
        }
    }
}
