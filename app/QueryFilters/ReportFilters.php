<?php

namespace App\QueryFilters;

use Cerbero\QueryFilters\QueryFilters;

/**
 * Filter records based on query parameters.
 *
 */
class ReportFilters extends QueryFilters
{
    /**
     * Filter records based on the query parameter "status"
     * 
     * @param mixed $int
     * @return void
     */
    public function status($int)
    {
        $this->query->whereHas('validation', function ($query) use ($int) {
            $query->where('validation_id', $int);
        });
    }
}
