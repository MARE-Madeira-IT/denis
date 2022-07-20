<?php

namespace Database\Seeders;

use App\Models\DebrisSize;
use Illuminate\Database\Seeder;

class DebrisSizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['name' => '<5*5 cm = 25 cm2'],
            ['name' => '<10*10 cm = 100 cm2'],
            ['name' => '<20*20 cm = 400 cm2'],
            ['name' => '<50*50 cm = 2500 cm2'],
            ['name' => '<100*100 cm = 10000 cm2 = 1 m2'],
            ['name' => '>100*100 cm = 10000 cm2 = 1 m2'],
            ['name' => 'line <1m long'],
            ['name' => 'line 1-5m long'],
            ['name' => 'line 5-10m long'],
            ['name' => 'line 10-50m long'],
            ['name' => 'line >50m long'],
        ];

        foreach ($items as $item) {
            DebrisSize::create($item);
        }
    }
}
