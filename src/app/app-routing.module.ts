import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BarComponent } from "./modules/bar/bar.component";
import { CarteleraComponent } from "./modules/cartelera/cartelera.component";
import { ComprasComponent } from "./modules/compras/compras.component";
import { HomeComponent } from "./modules/home/home.component";
import { PagoComponent } from "./modules/pago/pago.component";
import { PromocionesComponent } from "./modules/promociones/promociones/promociones.component";

import { RegistrarComponent } from "./modules/registrar/registrar.component";
import { AdinfoComponent } from "./modules/info/adinfo/adinfo.component";
import { ResumenComponent } from "./modules/resumen/resumen-bar/resumen.component";
import { ResumenRowComponent } from "./modules/resumen/resumen-row/resumen-row.component";

const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'compras/:id', component:ComprasComponent},
    {path: 'snack-bar', component:BarComponent},
    {path: 'cartelera', component:CarteleraComponent},
    {path: 'pago', component:PagoComponent},
    {path: 'promociones', component:PromocionesComponent},
    {path: 'registrar', component:RegistrarComponent},
    {path: 'info', component:AdinfoComponent},
    {path: 'resumen-bar', component:ResumenComponent},
    {path: 'resumen-row', component:ResumenRowComponent}
]


@NgModule({
    exports:[
        RouterModule
    ],
    imports:[
        RouterModule.forRoot(routes)
    ]
})

export class AppRoutingModule{}