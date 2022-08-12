<?php

namespace Database\Seeders;

use App\Models\DebrisCategory;
use Illuminate\Database\Seeder;

class DebrisCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['name' => 'Artificial polymer materials'],
            ['name' => 'Metal'],
            ['name' => 'Rubber'],
            ['name' => 'Cloth/textile'],
            ['name' => 'Paper/Cardboard'],
            ['name' => 'Processed/worked wood'],
            ['name' => 'Glass/ceramics'],
            ['name' => 'Chemicals'],
            ['name' => 'Other'],
        ];


        foreach ($items as $item) {
            DebrisCategory::create($item);
        }
    }
}
