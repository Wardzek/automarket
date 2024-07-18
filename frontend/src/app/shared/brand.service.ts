import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from '../Models/brand.model';
import { TokenService } from './token.service';  // Assurez-vous d'importer TokenService

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private apiUrl = 'http://localhost:8000/api/brands';

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  private getHeaders(): HttpHeaders {
    const token = this.tokenService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  createBrand(brand: Brand): Observable<Brand> {
    return this.http.post<Brand>(`${this.apiUrl}`, brand, { headers: this.getHeaders() });
  }

  updateBrand(id: number, brand: Brand): Observable<Brand> {
    return this.http.put<Brand>(`${this.apiUrl}/${id}`, brand, { headers: this.getHeaders() });
  }

  deleteBrand(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
