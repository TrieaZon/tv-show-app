import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeScreenShowComponent } from './home-screen-show/home-screen-show.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenShowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
