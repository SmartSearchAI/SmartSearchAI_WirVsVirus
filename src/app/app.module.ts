import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrialComponent } from './trial/app.component.trial';
import { TrialList } from './trial/trial-list/app.component.trial.list';
import { TrialListItem } from './trial/trial-list/app.component.trial.listitem';
import { AWSComponent } from './aws/app.component.aws';
import { AttributeList } from './aws/attribute-list/app.component.attribute.list';

@NgModule({
  declarations: [
    AppComponent,
    TrialComponent,
    TrialList,
    TrialListItem,
    AWSComponent,
    AttributeList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
