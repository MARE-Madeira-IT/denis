<?php

namespace Database\Seeders;

use App\Models\DebrisType;
use Illuminate\Database\Seeder;

class DebrisTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['name' => 'floating'],
            ['name' => 'seafloor'],
            ['name' => 'beached'],
        ];

        foreach ($items as $item) {
            DebrisType::create($item);
        }
    }
}
