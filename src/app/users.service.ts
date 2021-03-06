import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uri = 'https://api.github.com'

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.uri}/users`);
  }

  getUserByName(name) {
    return this.http.get(`${this.uri}/users/${name}`);
  }

  getRepos(name) {
    return this.http.get(`${this.uri}/users/${name}/repos`)
  }
}
