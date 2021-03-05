import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../models/Login';
import { LoginService } from '../../Services/login.service';

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
  Login:Login[] = []
  constructor(
    private loginService:LoginService,
    private _router: Router) { }

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
