import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
@Injectable({
  providedIn: 'root'
})
export class SQLService {
  db: SQLiteObject;

  constructor(private sqlite: SQLite) {
    this.CreateDataBase();
   }

  async CreateDataBase(){
    this.db = await this.sqlite.create({
      name: 'aventasapp.db',
      location: 'default',
    });

    this.db.sqlBatch(['CREATE TABLE IF NOT EXISTS Clientes (id INTEGER, codigocliente varchar(50), nombre varchar(100), empresaId varchar(10), codigoAsesor varchar(20), habilitado INTEGER, latitud NUMERIC, longitud NUMERIC, PRIMARY KEY(id))']);
  }
}
