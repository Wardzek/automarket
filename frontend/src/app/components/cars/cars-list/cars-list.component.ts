import { Component } from '@angular/core';
import { CarService } from '../../../shared/car.service';
import { Router } from '@angular/router';
import { Car } from '../../../Models/car.model';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../../shared/alert.service';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss'
})
export class CarsListComponent {
  cars: Car[] = [];

  constructor(private carService: CarService, 
              private router: Router, 
              private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.carService.getCars().subscribe({
      next: (data) => this.cars = data,
      error: (err) => console.error('Failed to load cars', err)
    });
  }

  navigateToCreate(): void {
    this.router.navigate(['/create-car']);
  }

  navigateToEdit(id: number): void {
    this.router.navigate([`/cars/edit/${id}`]);
  }

  deleteCar(id: number): void {
    this.carService.deleteCar(id).subscribe({
      next: () => {
        this.alertService.openSnackBar('Annonce supprimée avec succès !')
        this.loadCars();  // Reload the list after deletion
      },
      error: (err) => console.error('Failed to delete car', err)
    });
  }
}
