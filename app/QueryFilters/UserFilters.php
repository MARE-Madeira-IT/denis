<?php

namespace App\QueryFilters;

use Cerbero\QueryFilters\QueryFilters;

/**
 * Filter records based on query parameters.
 *
 */
class UserFilters extends QueryFilters
{
    public function search($string)
    {
        $this->query->where('name', 'like', '%' . $string . '%')
            ->orWhere('email', 'like', '%' . $string . '%')
            ->orWhere('country', 'like', '%' . $string . '%')
            ->orWhere('institution', 'like', '%' . $string . '%');
    }
}
