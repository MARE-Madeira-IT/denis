<?php

namespace Database\Seeders;

use App\Models\Validation;
use Illuminate\Database\Seeder;

class ValidationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['name' => 'pending'],
            ['name' => 'approved'],
            ['name' => 'rejected'],
        ];

        foreach ($items as $item) {
            Validation::create($item);
        }
    }
}
