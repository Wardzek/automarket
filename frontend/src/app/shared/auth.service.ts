import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/user.model';
import { TokenService } from './token.service';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  // User registration
  register(user: User): Observable<any> {
    console.log('Register request:', user);
    return this.http.post('http://localhost:8000/api/auth/register', user).pipe(
      tap(response => console.log('Register response:', response)),
      catchError(error => {
        console.error('Register error:', error);
        return throwError(error);
      })
    );
  }

  // Login
  signin(user: User): Observable<any> {
    console.log('Signin request:', user);
    return this.http.post<any>('http://localhost:8000/api/auth/login', user).pipe(
      tap(response => {
        console.log('Signin response:', response);
        this.tokenService.handleData(response.access_token); // Assurez-vous que c'est 'access_token'
      }),
      catchError(error => {
        console.error('Signin error:', error);
        return throwError(error);
      })
    );
  }

  // Access user profile
  profileUser(): Observable<any> {
    const token = this.tokenService.getToken(); 
    console.log('Token:', token); // Log du token

    if (!token) {
      throw new Error('No access token found');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    console.log('Profile request headers:', headers);
    return this.http.post<any>('http://localhost:8000/api/auth/me', {}, { headers }).pipe(
      tap(response => console.log('Profile response:', response)),
      catchError(error => {
        console.error('Profile error:', error);
        return throwError(error);
      })
    );
  }
}
