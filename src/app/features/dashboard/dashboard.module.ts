import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfacesComponent } from './interfaces/interfaces/interfaces.component';
import { ServicesComponent } from './services/services/services.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    InterfacesComponent,
    ServicesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
