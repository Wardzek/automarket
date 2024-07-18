import { Component } from '@angular/core';
import { BrandService } from '../../../shared/brand.service';
import { Brand } from '../../../Models/brand.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-brands-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './brands-list.component.html',
  styleUrl: './brands-list.component.scss'
})
export class BrandsListComponent {
  brands: Brand[] = [];

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.fetchBrands();
  }

  fetchBrands(): void {
    this.brandService.getBrands().subscribe(brands => {
      this.brands = brands;
    });
  }

  deleteBrand(id: number): void {
    this.brandService.deleteBrand(id).subscribe(() => {
      this.brands = this.brands.filter(brand => brand.id !== id);
    });
  }
}
