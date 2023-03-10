import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Pelicula } from "src/app/shared/interfaces/pelicula.interface";
import { PeliculasServices } from "src/app/shared/services/peliculas.service";
import { FormEliminarComponent } from "../form-eliminar/form-eliminar.component";

@Component({
    selector: 'peliculas-admin',
    templateUrl: './peliculas-admin.component.html',
    styleUrls: ['./peliculas-admin.component.css']
})

export class PeliculasAdminComponent  {

    constructor(private dialog:MatDialog, private peliculasServices: PeliculasServices, private router: Router) {
    }

    displayedColumns: string[] = ['pelicula_id','titulo_original','reparto', 'tiempo_duracion', 'tipo', 'categoria', 'clasificacion', 'precio', 'acciones'];

    get peliculas(): Pelicula[]{
        return this.peliculasServices.peliculas;
    }

    eliminar(id : number){
        this.dialog.open(FormEliminarComponent, {
            data: { id: id, url: '/api/Peliculas/SetPeliculas'}
        });
    }
}
