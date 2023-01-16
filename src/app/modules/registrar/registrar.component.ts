import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { RegistroRealizadoComponent } from "src/app/shared/components/resgirstro-realizado/registro-realizado.component";
import { Usuario } from "src/app/shared/interfaces/usuario.interface";
import { UsuarioService } from "src/app/shared/services/usuario.service";
@Component({
    selector :'app-registrar',
    templateUrl: './registrar.component.html',
    styleUrls: ['./registrar.component.css']

})
export class RegistrarComponent implements OnInit{

    constructor(private usuarioService: UsuarioService, private dialog:MatDialog){}

    usuarioRegistro = new FormGroup({
        nombres          : new FormControl('',Validators.required),
        apellidos        : new FormControl('', Validators.required),
        telf             : new FormControl('',Validators.required),
        cedula           : new FormControl('', Validators.required),
        ciudad           : new FormControl('', Validators.required),
        direccion        : new FormControl('', Validators.required),
        emailFormControl : new FormControl('', [Validators.required, Validators.email]),
        username         : new FormControl('', Validators.required),
        password         : new FormControl('', Validators.required),
        passwordrepeat   : new FormControl('', Validators.required)
    })

    ngOnInit(){}

    agregar(){
        let {nombres, apellidos, telf, cedula, ciudad, direccion, emailFormControl, username, password, passwordrepeat} = this.usuarioRegistro.value;
        if(this.usuarioRegistro.valid){
            const n = this.usuarioService.usuariosR.length;
            console.log(n);
            const nuevoUsuario: Usuario = {
                id_usuario: n,
                rol: 'usuario',
                nombre: nombres || '',
                apellido:  apellidos || '',
                telefono: telf || '',
                cedula: cedula || '',
                ciudad: ciudad || '',
                direccion: direccion || '',
                email: emailFormControl || '',
                nombre_usuario: username || '',
                contrasena: password || '',
                r_contrasena: passwordrepeat || '',
            }
            this.usuarioService.usuariosR.push(nuevoUsuario);
            this.dialog.open(RegistroRealizadoComponent);
            localStorage.setItem('usuariosR',JSON.stringify(this.usuarioService.usuariosR))

        }
    }

}