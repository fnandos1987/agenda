import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

const SERVER_URL = environment.serverUrl;

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  id: any;
  constructor(private http: HttpClient) { }

  getPersons() {
    return this.http.get(`${SERVER_URL}/pessoas`);
  }

  getPersonById(id) {
    return this.http.get(`${SERVER_URL}/pessoa/${id}`);
  }
}
