import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8000/api/auth/';
  private tokenKey = 'authToken';

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: any) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}registration/`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}login/`, credentials).pipe(
      tap((response: any) => {
        this.setToken(response.key);
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}logout/`, {}).pipe(
      tap(() => {
        this.removeToken();
      })
    );
  }

  private setToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.tokenKey, token);
    }
  }

  private getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }

  private removeToken(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('Removing token');
      localStorage.removeItem(this.tokenKey);
    }
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Authorization': `Token ${token}`
    });
  }
}
