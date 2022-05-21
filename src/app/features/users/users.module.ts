import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../material/material.module";

const routes = [
  {
    path: '',
    component: UsersComponent,
  }
];

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class UsersModule {
}
