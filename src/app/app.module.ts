import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {KeyWordsPrototypeView} from './modules/KeyWordsPrototype/KeyWordsPrototype.view';
import {KeyWordsComponent} from './components/KeyWordsComponent/KeyWords.component';

const routes: Routes = [
  {path: 'KeyWords', component: KeyWordsPrototypeView},
  {path: '', redirectTo: 'KeyWords', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

@NgModule({
  declarations: [
    AppComponent,
    KeyWordsPrototypeView,
    KeyWordsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
