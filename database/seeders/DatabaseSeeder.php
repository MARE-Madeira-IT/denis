<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(PermissionSeeder::class);
        $this->call(ValidationSeeder::class);

        $this->call(CountrySeeder::class);
        $this->call(LmeSeeder::class);

        $this->call(DebrisMaterialSeeder::class);
        $this->call(DebrisTypeSeeder::class);
        $this->call(DebrisSizeSeeder::class);
        $this->call(DebrisThicknessSeeder::class);
        $this->call(DebrisHabitatSeeder::class);
        $this->call(DebrisRugositySeeder::class);
        $this->call(DebrisCategorySeeder::class);
        $this->call(DebrisSubCategorySeeder::class);

        $this->call(TaxaLevelSeeder::class);
        $this->call(TaxaSpeciesStatusSeeder::class);
        $this->call(TaxaPopulationStatusSeeder::class);
        $this->call(TaxaAbundanceSeeder::class);
        $this->call(TaxaViabilitySeeder::class);
        $this->call(TaxaMaturitySeeder::class);
        $this->call(TaxaNativeRegionSeeder::class);
    }
}
