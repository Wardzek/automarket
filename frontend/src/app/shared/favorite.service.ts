import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  addFavorite(carId: number): Observable<any> {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    console.log('Adding favorite with headers:', headers);
    return this.http.post(`${this.apiUrl}/favorites/${carId}`, {}, { headers });
  }

  removeFavorite(carId: number): Observable<any> {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    console.log('Removing favorite with headers:', headers);
    return this.http.delete(`${this.apiUrl}/favorites/${carId}`, { headers });
  }

  getFavorites(): Observable<any> {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    console.log('Getting favorites with headers:', headers);
    return this.http.get(`${this.apiUrl}/favorites`, { headers });
  }
}
