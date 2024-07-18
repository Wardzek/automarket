<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Cars extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'price',
        'year',
        'fuel',
        'type',
        'brand_id',
    ];

    public function pictures()
    {
        return $this->hasMany(Picture::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }

    public function favorites()
    {
        return $this->hasMany(Favorite::class);
    }
}
