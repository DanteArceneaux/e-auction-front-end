import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {




    constructor(private http: HttpClient) { }

    registerUser(user: {
      firstName: string,
      lastName: string,
      email: string,
      pin: number,
      phone: string,
      state: string,
      city: string,
      role: string,
    }): Observable<User> {
      return this.http.post<User>('http://localhost:5000/e-auction/api/v1/auth/register', user);
    }

    loginUser(user: {
      email: string,
      pin: number
    }): Observable<User> {
      return this.http.post<User>('http://localhost:5000/e-auction/api/v1/auth/login', user);
    }

    getCurrentUser(): Observable<User> {
      return this.http.get<User>('http://localhost:5000/e-auction/api/v1/auth/me');
    }




}
