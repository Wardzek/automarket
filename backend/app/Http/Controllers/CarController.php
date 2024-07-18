<?php
    
namespace App\Http\Controllers;

use App\Models\Cars;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\CarStoreRequest;
use App\Http\Requests\CarUpdateRequest;

class CarController extends Controller
{
    /**
     * Display a listing of the resource with pagination.
     */
    public function index() {
        $cars = Cars::all();
        return response()->json($cars);
    }

    /**
     * Get all cars without pagination.
     */
    public function getAllCars() {
        $cars = Cars::all();
        return response()->json($cars);
    }
    
    /**
     * Show the form data needed for creating a new resource (For API, we send only necessary data).
     */
    public function create() {
        $brands = Brand::all(); // Récupère toutes les marques
        return response()->json(['brands' => $brands]);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(CarStoreRequest $request) {
        $car = Cars::create($request->validated());
        return response()->json($car, Response::HTTP_CREATED);
    }
  
    /**
     * Display the specified resource.
     */
    public function show(Cars $car) {
        return response()->json($car);
    }
  
    /**
     * Show the form data needed for editing the specified resource (For API, we send only necessary data).
     */
    public function edit(Cars $car) {
        return response()->json($car);
    }
  
    /**
     * Update the specified resource in storage.
     */
    public function update(CarUpdateRequest $request, Cars $car) {
        $car->update($request->validated());
        return response()->json($car);
    }
  
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cars $car) {
        $car->delete();
        return response()->json(['message' => 'Car deleted successfully']);
    }
}
