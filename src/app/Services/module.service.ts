import { Injectable } from '@angular/core';
import { Module, Module_Entry } from '../Models/Module_Model';
import { AngularFireDatabase, AngularFireList, listChanges } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  Module: Module;
  moduleEntries$: any[];
  constructor(private db: AngularFireDatabase) {
    db.list('/FightClub/ModuleEntries')
      .valueChanges()
      .subscribe((list) => {
        this.moduleEntries$ = list;
        console.log('Values Received ' + list.length);
        console.log(this.moduleEntries$);
      });
    this.Module = new Module();
  }

  getModule() {
    return this.Module;
  }
}
