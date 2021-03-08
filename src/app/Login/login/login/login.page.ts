import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from '../../models/Clientes';
import { Login } from '../../models/Login';
import { LoginService } from '../../Services/login.service';
import { SQLService } from '../../Services/sql.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credential:Login={
    UserAccount:'',
    Password:'',
    Message:'',
  }
  Clientes: Clientes[] = []
  constructor(
    private loginService:LoginService,
    private _router: Router,
    private SqlService: SQLService) { }

  ngOnInit() {
  }

  async handleSubmit(){
    this.credential.Message = "";
    try{
     let Respuesta = await this.loginService.InicioSesion(this.credential)
      if(Respuesta.Message == "Ok"){
        this._router.navigate(["/home"])
      }
    }catch(error){
      this.credential.Message = error.error.Message;
    }
  }

}
