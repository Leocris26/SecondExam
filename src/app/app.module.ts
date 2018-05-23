import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Page2Component } from './page2/page2.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'page1', component: Page2Component },
  { path: 'page2', component: Page2Component },
  { path: '', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Page2Component,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
