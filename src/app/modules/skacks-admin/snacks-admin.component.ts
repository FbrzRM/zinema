import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { SnackBarServices } from "src/app/shared/services/snack-bar.service";
import { FormEliminarComponent } from "../form-eliminar/form-eliminar.component";

@Component({
    selector: 'snacks-admin',
    templateUrl: './snacks-admin.component.html',
    styleUrls: ['./snacks-admin.component.css']
})

export class SnacksAdminComponent  {

    constructor(private dialog:MatDialog, private snackBarServices: SnackBarServices, private router: Router) {
    }

    displayedColumns: string[] = ['snacks_id', 'nombre', 'descripcion', 'precio', 'acciones'];

    get snackBar(){
        return this.snackBarServices.snacksBar;
    }

    eliminar(id : number){
        this.dialog.open(FormEliminarComponent, {
            data: { id: id, url: '/api/Snacks/SetSnacks'}
        });
    }
}