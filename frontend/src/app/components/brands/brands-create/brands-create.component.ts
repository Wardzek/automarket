import { Component } from '@angular/core';
import { BrandService } from '../../../shared/brand.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brands-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './brands-create.component.html',
  styleUrl: './brands-create.component.scss'
})
export class BrandsCreateComponent {
  brand: any = {};

  constructor(private brandService: BrandService, private router: Router) { }

  goBack(): void {
    this.router.navigate(['/brands']);
  }

  onSubmit(): void {
    if (this.brand.name) {
      this.brandService.createBrand(this.brand).subscribe({
        next: (response) => {
          console.log('Brand added', response);
          this.router.navigate(['/brands']);
        },
        error: (err) => console.error('Error adding brand', err)
      });
    }
  }
}
