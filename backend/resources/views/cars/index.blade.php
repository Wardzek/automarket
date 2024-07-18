@extends('cars.layout')
   
@section('content')
  
<div class="card mt-5">
  <h2 class="card-header">AJOUT D'UNE NOUVELLE ANNONCE</h2>
  <div class="card-body">
          
        @session('success')
            <div class="alert alert-success" role="alert"> {{ $value }} </div>
        @endsession
  
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <a class="btn btn-success btn-sm" href="{{ route('cars.create') }}"> <i class="fa fa-plus"></i> Créer une nouvelle annonce</a>
        </div>
  
        <table class="table table-bordered table-striped mt-4">
            <thead>
                <tr>
                    <th width="80px">No</th>
                    <th>Titre</th>
                    <th width="250px">Action</th>
                </tr>
            </thead>
  
            <tbody>
            @forelse ($cars as $car)
                <tr>
                    <td>{{ ++$i }}</td>
                    <td>{{ $car->title }}</td>
                    <td>
                        <form action="{{ route('cars.destroy',$car->id) }}" method="POST">
              
                            <a class="btn btn-primary btn-sm" href="{{ route('cars.edit',$car->id) }}"><i class="fa-solid fa-pen-to-square"></i> Modifier</a>
             
                            @csrf
                            @method('DELETE')
                
                            <button type="submit" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash"></i>Supprimer</button>
                        </form>
                    </td>
                </tr>
            @empty
                <tr>
                    <td colspan="4">Il n'y a pas de data.</td>
                </tr>
            @endforelse
            </tbody>
  
        </table>
        
        {!! $cars->links() !!}
  
  </div>
</div>
@endsection
