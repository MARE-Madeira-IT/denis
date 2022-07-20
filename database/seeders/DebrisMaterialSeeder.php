<?php

namespace Database\Seeders;

use App\Models\DebrisMaterial;
use Illuminate\Database\Seeder;

class DebrisMaterialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['name' => 'plastic (styrofoam)'],
            ['name' => 'plastic (nylon)'],
            ['name' => 'plastic'],
            ['name' => 'metal'],
            ['name' => 'rubber'],
            ['name' => 'glass'],
            ['name' => 'ceramics'],
            ['name' => 'textiles'],
            ['name' => 'leather'],
            ['name' => 'processed wood'],
            ['name' => 'paper/cardboard'],
            ['name' => 'other'],
        ];

        foreach ($items as $item) {
            DebrisMaterial::create($item);
        }
    }
}
