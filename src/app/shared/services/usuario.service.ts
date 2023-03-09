import { UsuariosPost } from "src/assets/ts/MOCK_DATA_Usuarios";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "../interfaces/usuario.interface";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService{

    private servicioUrl: string = '/api/Usuario/GetPerfil';

    constructor(private http:HttpClient){}

    perfil(user: Usuario){
        return this.http.post(this.servicioUrl, user);
    }

    private _usuarioR: Usuario[] = [...UsuariosPost]

    get usuariosR(): Usuario[]{
        return this._usuarioR;
    }
}