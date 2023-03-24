<?php

namespace App\QueryFilters;

use Carbon\Carbon;
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

    public function date($string)
    {
        $this->query->where('date', 'like', '%' . $string . '%');
    }

    public function dates($dates)
    {
        $from = Carbon::parse($dates[0])->startOfDay();
        $to = Carbon::parse($dates[1])->endOfDay();
        
        $this->query->whereBetween("date", [$from, $to]);
    }

    public function customid($int)
    {
        $this->query->where('custom_id',  $int);
    }

    public function status($int)
    {
        $this->query->whereHas('validation', function ($query) use ($int) {
            $query->where('validation_id', $int);
        });
    }

    public function user($string)
    {
        $this->query->whereHas('user', function ($query) use ($string) {
            $query->where('name', 'like', '%' . $string . '%');
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
