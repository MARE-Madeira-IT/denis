<?php

namespace Database\Seeders;

use App\Models\TaxaNativeRegion;
use Illuminate\Database\Seeder;

class TaxaNativeRegionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['name' => 'antarctica'],
            ['name' => 'arctic'],
            ['name' => 'mediterranean'],
            ['name' => 'north west atlantic'],
            ['name' => 'north east atlantic'],
            ['name' => 'baltic'],
            ['name' => 'wider caribbean sea'],
            ['name' => 'west africa'],
            ['name' => 'south atlantic'],
            ['name' => 'central indian ocean'],
            ['name' => 'arabian seas'],
            ['name' => 'east africa'],
            ['name' => 'east asian seas'],
            ['name' => 'south pacific and hawaii'],
            ['name' => 'north east pacific'],
            ['name' => 'north west pacific'],
            ['name' => 'southeast pacific'],
            ['name' => 'australia and new zealand'],
            ['name' => 'unknown'],

        ];

        foreach ($items as $item) {
            TaxaNativeRegion::create($item);
        }
    }
}
