import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/Login';
import { environment } from 'src/environments/environment';
import { Clientes } from '../models/Clientes';
import { SQLService } from './sql.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private SQLServices: SQLService) { }


  InicioSesion(login: Login) {
    return this.http.post<{ Message: string, Data: { Token: string } }>(`${environment.api}/api/authentication`, login).toPromise();
  }

  CargarClientes(Token: string) {
    return this.http.get<Clientes[]>(`${environment.api}/api/cliente/activos`, { headers: { 'Authorization': `Bearer ${Token}` } }).toPromise();
  }
}
