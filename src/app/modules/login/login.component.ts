import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router} from '@angular/router';
import { Usuario } from "src/app/shared/interfaces/usuario.interface";
import { LoginService } from "src/app/shared/services/login.service";
import { UsuarioService } from "src/app/shared/services/usuario.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})
export class LoginComponent{
    constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>, private loginService: LoginService,
      private usuarioServices: UsuarioService) { }

  alert: boolean = false;
  usuarioTemp: string ="";
  passwordTemp: string ="";

  usuarioLogin = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required),
    transaccion: new FormControl()
  })

  onSubmit(){
    this.usuarioLogin.value.transaccion ="LOG";
    this.usuarioLogin.value.username = this.usuarioLogin.value.username ;
    this.usuarioLogin.value.password = this.usuarioLogin.value.password;

    this.loginService.login(this.usuarioLogin.value as Usuario).subscribe((data:any) =>{
      localStorage.setItem('username', this.usuarioLogin.value.username || "");
      localStorage.setItem('token', data || "");
      this.dialogRef.close();
      this.loginService.username = localStorage.getItem("username") || '';
      console.log(data);

    },(errorData) => {
      this.alert = true;
      setTimeout(() => this.alert=false, 4000);
      console.log("errorData")
    });
  }

}