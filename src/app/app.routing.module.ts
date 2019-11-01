import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HWPLDashboardComponent } from './HWPL/HWPL_Dashboard/HWPL_Dashboard_component';

const routes: Routes = [
  {path: 'Home', component: HWPLDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
