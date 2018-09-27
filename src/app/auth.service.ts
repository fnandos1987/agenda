import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

const SERVER_URL = environment.serverUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth;
  constructor(private http: HttpClient, private router: Router) { }

  isAuthenticated() {
    return this.auth;
  }

  login(registerCredentials) {    
    this.http.post(`${SERVER_URL}/logar`, registerCredentials)
      .toPromise().then(response => {
        this.auth = response;
        if (response) {
          this.router.navigate(['/home']);
        }        
      });
  }

  logout() {
    this.auth = false;
  }
}
