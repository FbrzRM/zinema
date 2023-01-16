import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { MaterialModule } from "../shared/material/material.module";
import { SharedModule } from "../shared/shared.module";
import { ComprasComponent } from "./compras/compras.component";
import { HomeComponent } from "./home/home.component";
import { StepperComponent } from "./stepper/stepper/stepper.component";
import { BarComponent } from './bar/bar.component';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { CommonModule } from "@angular/common";
import { PagoComponent } from "./pago/pago.component";
import { LoginComponent } from "./login/login.component";
import { RegistrarComponent } from "./registrar/registrar.component";
import { AdinfoComponent } from './info/adinfo/adinfo.component';
import { ResumenComponent } from './resumen/resumen-bar/resumen.component';
import { ResumenRowComponent } from './resumen/resumen-row/resumen-row.component';
import { PromDialogComponent } from "./promociones/prom-dialog/prom-dialog.component";
import { PromDialogSecComponent} from "./promociones/prom-dialog-sec/prom-dialog-sec.component";
import { PromocionesComponent} from "./promociones/promociones/promociones.component";


import { ExinfoComponent } from './info/exinfo/exinfo.component';
import { ExinfoRowComponent } from './info/exinfo-row/exinfo-row.component';
import { PerfilComponent } from "./perfil/perfil.component";
import { ReservacionComponent } from "./reservarcion/reservacion.component";

@NgModule({
    declarations: [
        HomeComponent,
        ComprasComponent,
        StepperComponent,
        BarComponent,
        CarteleraComponent,
        PagoComponent,
        LoginComponent,
        RegistrarComponent,
        AdinfoComponent,
        ResumenComponent,
        ResumenRowComponent,
        ExinfoComponent,
        ExinfoRowComponent,
        PromocionesComponent,
        PromDialogComponent,
        PromDialogSecComponent,
        PromocionesComponent,
        PerfilComponent,
        ReservacionComponent
    ],
    exports: [
        HomeComponent,
        ComprasComponent,
        PagoComponent
    ],
    imports: [
        CoreModule,
        SharedModule,
        MaterialModule,
        CommonModule,

    ]
})

export class ModulesModule{}