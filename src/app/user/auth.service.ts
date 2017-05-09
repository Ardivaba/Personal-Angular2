import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private http: Http) {

  }

  public login(username, password) {
    console.log("Logging in 2: " + username + " " + password);
    this.http.get("http://localhost:4300/api/users/login/" + username + "/" + password).map(res => { return res.json() }).subscribe(res => { console.log(res); console.log(document.cookie); });
  }

}
