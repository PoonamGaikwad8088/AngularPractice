import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentModule } from './parent/parent.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ParentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
