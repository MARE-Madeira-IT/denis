<?php

namespace Database\Seeders;

use App\Models\DebrisRugosity;
use Illuminate\Database\Seeder;

class DebrisRugositySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['name' => 'smooth'],
            ['name' => 'scarred'],
            ['name' => 'lined'],
            ['name' => 'coriaceous'],
            ['name' => 'rough'],
            ['name' => 'soft'],
            ['name' => 'other'],
        ];

        foreach ($items as $item) {
            DebrisRugosity::create($item);
        }
    }
}
