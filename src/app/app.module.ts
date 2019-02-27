import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { Component21Component } from './components/component21/component21.component';
import { Component22Component } from './components/component22/component22.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Component1Component,
    Component2Component,
    Component21Component,
    Component22Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
