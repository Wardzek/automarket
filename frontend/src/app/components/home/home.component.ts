import { Component } from '@angular/core';
import { CarService } from '../../shared/car.service';
import { CommonModule } from '@angular/common';
import { FavoriteService } from '../../shared/favorite.service';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cars: any;

  constructor(
    private carService:CarService,
    private favoriteService: FavoriteService,
    private alertService: AlertService) {}

  ngOnInit() {
    this.getAllCars();
  }

  getAllCars() {
    this.carService.getAllCars().subscribe({
      next: (res) => {
        this.cars = res;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des voitures:', error);
      }
    });
  }
  

  addFavorite(carId: number): void {
    this.favoriteService.addFavorite(carId).subscribe(
      response => {
        this.alertService.openSnackBar('Ajouté au favoris avec succès !')
      },
      error => {
        console.error('Error adding to favorites', error);
      }
    );
  }
}
