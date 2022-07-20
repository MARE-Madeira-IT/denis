<?php

namespace Database\Seeders;

use App\Models\Lme;
use Illuminate\Database\Seeder;

class LmeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            'East Bering Sea',
            'Gulf of Alaska',
            'California Current',
            'Gulf of California',
            'Gulf of Mexico',
            'Southeast U.S. Continental Shelf',
            'Northeast U.S. Continental Shelf',
            'Scotian Shelf',
            'Newfoundland-Labrador Shelf',
            'Insular Pacific-Hawaiian',
            'Pacific Central-American Coastal',
            'Caribbean Sea',
            'Antarctica',
            'Kuroshio Current',
            'Humboldt Current',
            'Patagonian Shelf',
            'South Brazil Shelf',
            'East Brazil Shelf',
            'North Brazil Shelf',
            'West Greenland Shelf',
            'East Greenland Shelf',
            'Barents Sea',
            'Norwegian Shelf',
            'North Sea',
            'Baltic Sea',
            'Celtic-Biscay Shelf',
            'Black Sea',
            'Sea of Okhotsk',
            'Iberian Coastal',
            'Mediterranean Sea',
            'Canary Current',
            'Guinea Current',
            'Benguela Current',
            'Agulhas Current',
            'Somali Coastal Current',
            'Arabian Sea',
            'Red Sea',
            'Bay of Bengal',
            'Gulf of Thailand',
            'South China Sea',
            'Hudson Bay',
            'Beaufort Sea',
            'Sulu-Celebes Sea',
            'Indonesian Sea',
            'North Australian Shelf',
            'Northeast Australian Shelf/Great Barrier Reef',
            'East-Central Australian Shelf',
            'Southeast Australian Shelf',
            'Southwest Australian Shelf',
            'West-Central Australian Shelf',
            'Northwest Australian Shelf',
            'New Zealand Shelf',
            'East China Sea',
            'Yellow Sea',
            'Arctic Ocean',
            'Kara Sea',
            'Sea of Japan',
            'Oyashio Current',
            'West Bering Sea',
            'Chukchi Sea',
            'East Siberian Sea',
            'Laptev Sea',
            'Iceland Shelf',
            'Faroe Plateau',
            'Macaronesia',
            'Caspian Sea',
        ];

        foreach ($items as $item) {
            Lme::create([
                'name' => $item
            ]);
        }
    }
}
