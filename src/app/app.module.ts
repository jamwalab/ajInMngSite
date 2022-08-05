import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IncidentCreateComponent } from './incident/incident-create/incident-create.component';

@NgModule({
  declarations: [
    AppComponent,
    IncidentCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
