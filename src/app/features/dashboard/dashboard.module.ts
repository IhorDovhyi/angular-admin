import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components/components.component';
import { InterfacesComponent } from './interfaces/interfaces/interfaces.component';
import { ServicesComponent } from './services/services/services.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    InterfacesComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
