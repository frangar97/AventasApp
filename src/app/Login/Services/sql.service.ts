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

  async CreateDataBase() {
    this.db = await this.sqlite.create({
      name: 'aventasapp.db',
      location: 'default',
    });
    this.db.sqlBatch(['CREATE TABLE IF NOT EXISTS Clientes (CodigoCliente varchar(50), Nombre varchar(100), EmpresaId varchar(10), CodigoAsesor varchar(20), Habilitado INTEGER, Latitud NUMERIC, Longitud NUMERIC, PRIMARY KEY(CodigoCliente))']);
  }

  async executeQuery(query: string, params: []) {
    let result = await this.db.executeSql(query, params);
    let data = []

    for (let i = 0; i < result.rows.length; i++) {
      data.push(result.rows.item(i))
    }
    return data;
  }
}
