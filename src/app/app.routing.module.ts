import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgileFluencyQuestionairComponent} from './AgileFluency/Agile_Fluency.Questionair.component';

const routes: Routes = [
  {path: 'AgileFluency', component: AgileFluencyQuestionairComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
