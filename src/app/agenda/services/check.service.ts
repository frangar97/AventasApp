import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/Cliente';

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJJZCI6MSwiVXNlckFjY291bnQiOiJoYmVuaXRleiIsIk5hbWUiOm51bGwsIkR1ZURhdGUiOiIyMDIxLTAzLTA0VDIzOjAzOjQwLjg3Mjg2NjYtMDY6MDAiLCJJc0FkbWluIjpmYWxzZX0.K4fjDthTQzhX3qOSEZY61Xwx1WRfAKi0IxxH0dqF-d0"


@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor(private http: HttpClient) { }

  obtenerClientes() {
    return this.http.get<Cliente[]>(`${environment.api}/api/cliente/activos`, { headers: { 'Authorization': `Bearer ${token}` } }).toPromise();
  }
}
