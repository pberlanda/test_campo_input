import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CampoinputComponent } from "./campoinput/campoinput.component";
import { ServersComponent } from "./servers/servers.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CampoinputComponent, ServersComponent ],
  bootstrap:    [ AppComponent ] // elenca tutti i componenti che Angular deve conoscere all'avvio
})
export class AppModule { }
