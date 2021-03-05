import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/Login';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  InicioSesion(login: Login) {
    return this.http.post<{Message:string}>(`${environment.api}/api/authentication`, login).toPromise();
  }
}
