import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Cliente } from '../../model/Cliente';
import { Coordenada } from '../../model/Coordenada';
import { PineoService } from '../../services/pineo.service';

@Component({
  selector: 'app-pineo',
  templateUrl: './pineo.page.html',
  styleUrls: ['./pineo.page.scss'],
})
export class PineoPage implements OnInit {

  clientes: Cliente[] = [];

  constructor(private pineoService: PineoService, private alertController: AlertController) { }

  ngOnInit() {
    this.cargarClientes();
  }

  async cargarClientes() {
    this.clientes = await this.pineoService.obtenerClientes();
  }

  async peticionCoordenada(codigo: string) {
    const alert = await this.alertController.create({
      header: 'Coordenadas',
      message: `¿Desea hacer pin en esta ubicación para el cliente ${codigo}?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.postCoordenadas(codigo);
          }
        }
      ]
    });

    await alert.present();
  }

  postCoordenadas(codigo: string) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const coordenada: Coordenada = {
        cliente: codigo,
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      };

      await this.pineoService.postearCoordenadas(coordenada);
      const index = this.clientes.findIndex(x => x.Codigo === codigo);
      this.clientes[index].Latitud = position.coords.latitude;
      this.clientes[index].Longitud = position.coords.longitude;

    });
  }

}
