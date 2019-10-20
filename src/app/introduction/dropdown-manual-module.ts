import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDropdownManual } from './dropdown-manual';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  imports: [BrowserModule, NgbModule, MatRadioModule],
  declarations: [NgbdDropdownManual],
  exports: [NgbdDropdownManual],
  bootstrap: [NgbdDropdownManual]
})
export class NgbdDropdownManualModule {}
