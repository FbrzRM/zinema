import { Component } from "@angular/core";
import { PromocionesServices } from "src/app/shared/services/promociones.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { FormEliminarComponent } from "../form-eliminar/form-eliminar.component";


@Component({
    selector: 'app-promociones-admin',
    templateUrl: './promociones-admin.component.html',
    styleUrls: ['./promociones-admin.component.css']
})

export class PromocionesAdminComponent{
    constructor(private dialog:MatDialog, private promocionesServices: PromocionesServices, private router: Router) {
    }

    displayedColumns: string[] = ['promociones_id', 'descripcion', 'acciones'];

    get promociones(){
        return this.promocionesServices.Promociones;
    }

    eliminar(id : number){
        this.dialog.open(FormEliminarComponent, {
            data: { id: id, url: '/api/Promociones/SetPromociones'}
        });
    }

}