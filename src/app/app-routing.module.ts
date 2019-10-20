import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent} from './introduction/app.component.introduction';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuoteComponent } from './quote/quote.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoodwelcomeComponent } from './moodwelcome/moodwelcome.component';
import { HWPLDashboardComponent } from './HWPL/HWPL_Dashboard/HWPL_Dashboard_component';
import { DisplayDiaryComponent } from './display-diary/display-diary.component';

const routes: Routes = [
  {path: 'Home', component: MoodwelcomeComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Diary', component: DisplayDiaryComponent},
  {path: 'Profile', component: UserProfileComponent},
  {path: 'Introduction', component: IntroductionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
