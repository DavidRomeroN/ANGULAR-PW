import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import {UserService} from "../user/user.service";
import {AuthUtils} from "./auth.utils";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _authenticated: boolean = false;
  private _httpClient = inject(HttpClient);
  private _userService = inject(UserService);

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Setter & getter for access token
   */
  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Sign in
   *
   * @param credentials
   */
  signIn(credentials: { user: string; clave: string }): Observable<any> {
    return this._httpClient.post('http://localhost:8080/api/auth/login', credentials).pipe(
      switchMap((response: any) => {
        this.accessToken = response.token; // Cambia a 'token' o como tu backend lo envíe
        this._authenticated = true;
        return of(response);
      })
    );
  }

  /**
   * Sign up
   *
   * @param user
   */
  signUp(user: { user: string; clave: string }): Observable<any> {
    return this._httpClient.post('http://localhost:8080/api/auth/register', user);
  }

  /**
   * Sign out
   */
  signOut(): Observable<any> {
    localStorage.removeItem('accessToken');
    this._authenticated = false;
    return of(true);
  }

  /**
   * Check the authentication status
   */
  check(): Observable<boolean> {
    if (this._authenticated) {
      return of(true);
    }

    if (!this.accessToken || AuthUtils.isTokenExpired(this.accessToken)) {
      return of(false);
    }

    return of(true);
  }
}
