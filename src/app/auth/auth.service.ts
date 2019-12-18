import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = true;
  private _userID : string;
  private res : AuthResponseData;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get userID(){
    return this._userID;
  }

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
      {
        email,
        password,
        returnSecureToken: true
      }
    );
  }

  login(email: string, password: string) {
    //firebase login API here
    this._userIsAuthenticated = true;
    console.log(this._userIsAuthenticated);
    console.log("test: " + this._userID);
    const res = this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
      {
        email,
        password,
        returnSecureToken: true
      }
    );

    return res;
  }

  logout() {
    this._userIsAuthenticated = false;
  }


}
