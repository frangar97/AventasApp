import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/Cliente';
import { CheckService } from '../../services/check.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  clientes: Cliente[] = [];

  constructor(private checkService: CheckService) { }

  ngOnInit() {
    this.cargarClientes();
  }

  async cargarClientes() {
    let listaClientes = await this.checkService.obtenerClientes();
    this.clientes = listaClientes.map(x => ({ Codigo: x.Codigo, Nombre: x.Nombre, checkin: false, checkout: true }));
  }

  checkin(codigo: string) {
    this.clientes = this.clientes.map(x => {
      if (x.Codigo === codigo) {
        return { Codigo: x.Codigo, Nombre: x.Nombre, checkin: true, checkout: false };
      }
      return { Codigo: x.Codigo, Nombre: x.Nombre, checkin: true, checkout: true };
    });
  }

  checkout(codigo: string) {
    this.clientes = this.clientes.map(x => {
      if (x.Codigo === codigo) {
        return { Codigo: x.Codigo, Nombre: x.Nombre, checkin: true, checkout: true };
      }

      return { Codigo: x.Codigo, Nombre: x.Nombre, checkin: false, checkout: true };
    });
  }

}
