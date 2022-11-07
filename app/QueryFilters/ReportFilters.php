<?php

namespace App\QueryFilters;

use Cerbero\QueryFilters\QueryFilters;

/**
 * Filter records based on query parameters.
 *
 */
class ReportFilters extends QueryFilters
{
    public function id($int)
    {
        $this->query->where('id', $int);
    }

    public function status($int)
    {
        $this->query->whereHas('validation', function ($query) use ($int) {
            $query->where('validation_id', $int);
        });
    }

    public function taxas($string)
    {
        $this->query->whereHas('taxas', function ($query) use ($string) {
            $query->where('identification', 'like', '%' . $string . '%');
        });
    }

    public function debris($string)
    {
        $this->query->whereHas('debris', function ($query) use ($string) {
            $query->whereHas('subcategory', function ($query) use ($string) {
                $query->where('mdi_code', 'like', '%' . $string . '%');
            });
        });
    }

    public function location($string)
    {
        $this->query->whereHas('site', function ($query) use ($string) {
            $query->where('name', 'like', '%' . $string . '%')
                ->orWhere('region', 'like', '%' . $string . '%')
                ->orWhereHas('country', function ($query) use ($string) {
                    $query->where('name', 'like', '%' . $string . '%');
                })
                ->orWhereHas('lme', function ($query) use ($string) {
                    $query->where('name', 'like', '%' . $string . '%');
                });
        });
    }
}
