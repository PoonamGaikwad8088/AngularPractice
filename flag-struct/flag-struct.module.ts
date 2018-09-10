import { FlagStructComponent } from './flag-struct.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FlagStructComponent],
  exports:[FlagStructComponent]
})
export class FlagStructModule { }
