import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CarService } from '../../../shared/car.service';

@Component({
  selector: 'app-cars-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cars-edit.component.html',
  styleUrl: './cars-edit.component.scss'
})
export class CarsEditComponent {
  carForm: FormGroup;
  carId!: number;

  fieldLabels = ['Titre', 'Année', 'Prix', 'Type', 'Carburant', 'Description'];

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.carForm = this.fb.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      price: ['', Validators.required],
      type: ['', Validators.required],
      fuel: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.carId = this.route.snapshot.params['id'];
    this.loadCarDetails();
  }

  loadCarDetails(): void {
    this.carService.getCarById(this.carId).subscribe(car => {
      this.carForm.patchValue(car);
    });
  }

  onSubmit(): void {
    if (this.carForm.valid) {
      this.carService.updateCar(this.carId, this.carForm.value).subscribe(() => {
        this.router.navigate(['/cars']);
      });
    }
  }
}
