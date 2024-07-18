@extends('cars.layout')
    
@section('content')
  
<div class="card mt-5">
  <h2 class="card-header">AJOUT D'UNE NOUVELLE ANNONCE</h2>
  <div class="card-body">
  
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <a class="btn btn-primary btn-sm" href="{{ route('cars.index') }}"><i class="fa fa-arrow-left"></i> Retour</a>
    </div>
  
    <form action="{{ route('cars.store') }}" method="POST">
        @csrf
  
        <div class="mb-3">
            <label for="inputTitle" class="form-label"><strong>Titre:</strong></label>
            <input
                type="text"
                name="title"
                class="form-control @error('title') is-invalid @enderror"
                id="inputTitle"
                placeholder="Titre">
            @error('title')
                <div class="form-text text-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="mb-3">
            <label for="inputYear" class="form-label"><strong>Année:</strong></label>
            <input
                type="text"
                name="year"
                class="form-control @error('year') is-invalid @enderror"
                id="inputYear"
                placeholder="Année">
            @error('year')
                <div class="form-text text-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="mb-3">
            <label for="inputPrice" class="form-label"><strong>Prix:</strong></label>
            <input
                type="text"
                name="price"
                class="form-control @error('price') is-invalid @enderror"
                id="inputPrice"
                placeholder="Prix">
            @error('price')
                <div class="form-text text-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="mb-3">
            <label for="inputType" class="form-label"><strong>Type:</strong></label>
            <input
                type="text"
                name="type"
                class="form-control @error('price') is-invalid @enderror"
                id="inputType"
                placeholder="Type">
            @error('type')
                <div class="form-text text-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="mb-3">
            <label for="inputFuel" class="form-label"><strong>Carburant:</strong></label>
            <input
                type="text"
                name="fuel"
                class="form-control @error('fuel') is-invalid @enderror"
                id="inputFuel"
                placeholder="Carburant">
            @error('fuel')
                <div class="form-text text-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="mb-3">
            <label for="inputDescription" class="form-label"><strong>Description:</strong></label>
            <input
                type="text"
                name="description"
                class="form-control @error('description') is-invalid @enderror"
                id="inputDescription"
                placeholder="Description">
            @error('description')
                <div class="form-text text-danger">{{ $message }}</div>
            @enderror
        </div>
        <div class="mb-3">
            <label for="brandSelect" class="form-label"><strong>Marque:</strong></label>
            <select name="brand_id" id="brandSelect" class="form-control @error('brand_id') is-invalid @enderror">
                <option value="">Choisir une marque</option>
                @foreach($brands as $brand)
                    <option value="{{ $brand->id }}">{{ $brand->name }}</option>
                @endforeach
            </select>
            @error('brand_id')
                <div class="form-text text-danger">{{ $message }}</div>
            @enderror
        </div>

  
        <button type="submit" class="btn btn-success"><i class="fa-solid fa-floppy-disk"></i> Ajouter</button>
    </form>
  </div>
</div>
@endsection
