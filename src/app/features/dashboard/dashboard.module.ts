import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfacesComponent } from './interfaces/interfaces/interfaces.component';
import { ServicesComponent } from './services/services/services.component';




@NgModule({
  declarations: [
    InterfacesComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
