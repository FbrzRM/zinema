import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "../interfaces/usuario.interface";

@Injectable({
    providedIn: 'root'
})
export class LoginService{

    private servicioUrl: string = '/api/Usuario/PostLog';

    constructor(private http: HttpClient){}

    login(user: Usuario){
        return this.http.post(this.servicioUrl, user);
    }

    username: string = '';
}