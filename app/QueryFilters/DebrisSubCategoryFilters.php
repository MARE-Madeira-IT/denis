<?php

namespace App\QueryFilters;

use Cerbero\QueryFilters\QueryFilters;

/**
 * Filter records based on query parameters.
 *
 */
class DebrisSubCategoryFilters extends QueryFilters
{
    public function search($string)
    {
        $this->query->where('name', 'like', '%' . $string . '%');
    }
}