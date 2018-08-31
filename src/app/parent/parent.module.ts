import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { BtnPnlComponent } from './btn-pnl/btn-pnl.component';
import { AlrtComponent } from './alrt/alrt.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ParentComponent, BtnPnlComponent, AlrtComponent],
  exports:[
    BtnPnlComponent,
    AlrtComponent,
    ParentComponent
  ]
})
export class ParentModule { }
