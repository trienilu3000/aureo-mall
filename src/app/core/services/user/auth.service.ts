import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { isDevMode } from '@angular/core';

import { User, UserInfo } from '../../models/user/auth.models';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string;
  private loggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn = this.loggedIn.asObservable();

  constructor(private http: HttpClient) {
    if (isDevMode) {
      this.url = environment.apiKey;
    } else {
      this.url = environment.apiKey;
    }
  }

  getAccessKey(): string | null {
    return localStorage.getItem('accessKey');
  }

  setAccessKey(key: string): void {
    localStorage.setItem('accessKey', key);
  }

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.url}/auth/login`, {
        email,
        password,
      })
      .pipe(
        map((response) => {
          if (response.data.accessKey) {
            this.setAccessKey(response.data.accessKey);
          }
          return response;
        }),
      );
  }

  setLoginStatus(status: boolean) {
    this.loggedIn.next(status);
  }

  register(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ): Observable<User> {
    return this.http.post<User>(`${this.url}/auth/register`, {
      firstName,
      lastName,
      email,
      password,
    });
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.url}/auth/logout`, null);
  }

  getMyInfo(): Observable<any> {
    return this.http.get<UserInfo>(`${this.url}/users/myinfo`);
  }

  refreshToken(): Observable<any> {
    return this.http.post<any>(`${this.url}/auth/refresh`, null);
  }
}
