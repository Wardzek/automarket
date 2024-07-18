import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarService } from '../../../shared/car.service';
import { BrandService } from '../../../shared/brand.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../shared/alert.service';

@Component({
  selector: 'app-cars-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cars-create.component.html',
  styleUrl: './cars-create.component.scss'
})
export class CarsCreateComponent {
  carForm: FormGroup;
  brands: any[] = [];

  constructor(private fb: FormBuilder, 
              private carService: CarService, 
              private brandService: BrandService,
              private router: Router, 
              private alertService: AlertService
  ) {
    this.carForm = this.fb.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      price: ['', Validators.required],
      type: ['', Validators.required],
      fuel: ['', Validators.required],
      description: ['', Validators.required],
      brand_id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadBrands();
  }

  goBack(): void {
    this.router.navigate(['/cars']);
  }

  loadBrands(): void {
    this.brandService.getBrands().subscribe(data => {
      this.brands = data;
    }, error => {
      console.error('Error loading brands:', error);
    });
  }

  onSubmit(): void {
    if (this.carForm.valid) {
      this.carService.createCar(this.carForm.value).subscribe({
        next: (result) => {
          this.alertService.openSnackBar('Annonce ajoutée avec succès !')
          this.router.navigate(['/cars']); // Redirige l'utilisateur vers la liste des voitures
        },
        error: (err) => {
          this.alertService.openSnackBar('Échec lors de l\'ajout !', err)
        }
      });
    }
  }
 }
