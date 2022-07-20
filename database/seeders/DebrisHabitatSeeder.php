<?php

namespace Database\Seeders;

use App\Models\DebrisHabitat;
use Illuminate\Database\Seeder;

class DebrisHabitatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['name' => 'open ocean'],
            ['name' => 'rocky reef'],
            ['name' => 'coral reef'],
            ['name' => 'kelp forest'],
            ['name' => 'mangrove forests'],
            ['name' => 'seagrass meadows'],
            ['name' => 'salt marsh'],
            ['name' => 'tidal pool'],
            ['name' => 'sandy beach'],
            ['name' => 'rocky beach'],
            ['name' => 'muddy beach'],
            ['name' => 'other'],
        ];

        foreach ($items as $item) {
            DebrisHabitat::create($item);
        }
    }
}
