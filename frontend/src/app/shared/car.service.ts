import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Car } from '../Models/car.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarService {
  private apiUrl = 'http://localhost:8000/api/cars';

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  private getHeaders(): HttpHeaders {
    const token = this.tokenService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  // Méthode pour obtenir toutes les voitures (accessible à tous)
  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}/all`);
  }

  // Obtenez les voitures avec pagination (admin)
  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  // Créez une nouvelle voiture (admin)
  createCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car, { headers: this.getHeaders() });
  }

  // Affichez une voiture spécifique par ID (admin)
  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  // Mettez à jour une voiture (admin)
  updateCar(id: number, car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.apiUrl}/${car.id}`, car, { headers: this.getHeaders() });
  }

  // Supprimez une voiture (admin)
  deleteCar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
