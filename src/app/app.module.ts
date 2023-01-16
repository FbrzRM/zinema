import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ModulesModule } from "./modules/modules.module";
import { AppRoutingModule } from './app-routing.module';
import { CardspayComponent } from './shared/components/cardspay/cardspay.component';
import { InforegisttroComponent } from './modules/info/inforegisttro/inforegisttro.component';


@NgModule({
  declarations: [
    AppComponent,
    InforegisttroComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // AdminModule,
    CoreModule,
    ModulesModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
