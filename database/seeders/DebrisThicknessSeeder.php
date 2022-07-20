<?php

namespace Database\Seeders;

use App\Models\DebrisThickness;
use Illuminate\Database\Seeder;

class DebrisThicknessSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['name' => 'solid'],
            ['name' => 'flexible'],
        ];

        foreach ($items as $item) {
            DebrisThickness::create($item);
        }
    }
}
