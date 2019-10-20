import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../Services/module.service';
import { Module } from '../Models/Module_Model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  module: Module;
  constructor(private module_service: ModuleService) {
    this.module = module_service.getModule();
  }

  ngOnInit() {}
}
