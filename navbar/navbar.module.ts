import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { DrpdwnDirective } from './drpdwn.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, DrpdwnDirective],
  exports: [
    NavbarComponent,
    DrpdwnDirective
  ]
})
export class NavbarModule { }
