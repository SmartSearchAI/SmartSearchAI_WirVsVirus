import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {EChartsModule} from '@amcdnl/ngx-echarts';

import { AppComponent } from './app.component';
import {KeyWordsPrototypeView} from './modules/KeyWordsPrototype/KeyWordsPrototype.view';
import {KeyWordsComponent} from './components/KeyWordsComponent/KeyWords.component';

import {ScatterPlotPrototypeView} from './modules/ScatterPlotPrototype/ScatterPlotPrototype.view';
import {PlotScatterComponent} from './components/PlotComponents/plot.scatter.component';

const routes: Routes = [
  {path: 'KeyWords', component: KeyWordsPrototypeView},
  {path: 'ScatterPlot', component: ScatterPlotPrototypeView},
  {path: '', redirectTo: 'ScatterPlot', pathMatch: 'full'}
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
    KeyWordsComponent,
    ScatterPlotPrototypeView,
    PlotScatterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    EChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
