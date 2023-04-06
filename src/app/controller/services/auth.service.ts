import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8036/api/v1/auth/login';
  private _token: string = '';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(username: string, password: string) {
    return this.http.post<any>(this.baseUrl, { username, password }).pipe(
      tap((response) => {
        console.log('here');
        const token = response.token;
        this.cookieService.set('jwt_token', token);
      }),
      catchError((err) => {
        console.error(err);
        return throwError('An error occurred while logging in.');
      })
    );
  }
  getTokenFromCookies(headers: HttpHeaders) {
    const cookies = headers.getAll('Set-Cookie');
    if (!cookies) return '';
    const tokenCookie = cookies.find((cookie) => cookie.includes('token'));
    if (!tokenCookie) return '';
    return tokenCookie.split('=')[1].split(';')[0];
  }

  getToken() {
    if (!this._token) {
      this._token = this.cookieService.get('jwt_token'); // Read token from cookie
    }
    return this._token;
  }

  logout() {
    this.cookieService.delete('jwt_token');
  }

  isLoggedIn() {
    console.log('is logged ind ' + this.cookieService.check('jwt_token'));
    return this.cookieService.check('jwt_token');
  }
}