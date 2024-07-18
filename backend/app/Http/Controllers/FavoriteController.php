<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Favorite;
use App\Models\Cars;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends Controller
{
    public function addFavorite($carId)
    {
        $user = Auth::user();
        $car = Cars::findOrFail($carId);

        $favorite = new Favorite();
        $favorite->user_id = $user->id;
        $favorite->car_id = $car->id;
        $favorite->save();

        return response()->json(['message' => 'Car added to favorites']);
    }

    public function removeFavorite($carId)
    {
        $user = Auth::user();
        $favorite = Favorite::where('user_id', $user->id)->where('car_id', $carId)->first();

        if ($favorite) {
            $favorite->delete();
            return response()->json(['message' => 'Car removed from favorites']);
        } else {
            return response()->json(['message' => 'Favorite not found'], 404);
        }
    }

    public function getFavorites()
    {
        $user = Auth::user();
        $favorites = $user->favorites()->with('car')->get();

        return response()->json($favorites);
    }
}
