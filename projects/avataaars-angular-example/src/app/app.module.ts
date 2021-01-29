import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AvataaarsAngularModule} from 'avataaars-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AvataaarsAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
