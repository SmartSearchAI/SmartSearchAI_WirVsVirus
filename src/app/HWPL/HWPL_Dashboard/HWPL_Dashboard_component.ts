import { Component, OnInit} from '@angular/core';


class HWPL {
  title: string;
  subtitle: string;
  ranges: Array<Number>;
  measures: Array<Number>;
  markers: Array<Number>;
};

@Component({
  selector: 'app-hwpl-dashboard',
  templateUrl: './HWPL_Dashboard_component.html',
  styleUrls: ['./HWPL_Dashboard_component.scss']
})

export class HWPLDashboardComponent implements OnInit {
  data: Array<HWPL>;
  constructor() {
    this.data = [
      {"title":"Revenue","subtitle":"US$, in thousands","ranges":[150,225,300],"measures":[220,270],"markers":[250]},
      {"title":"Profit","subtitle":"%","ranges":[20,25,30],"measures":[21,23],"markers":[26]},
      {"title":"Order Size","subtitle":"US$, average","ranges":[350,500,600],"measures":[100,320],"markers":[550]},
      {"title":"New Customers","subtitle":"count","ranges":[1400,2000,2500],"measures":[1000,1650],"markers":[2100]},
      {"title":"Satisfaction","subtitle":"out of 5","ranges":[3.5,4.25,5],"measures":[3.2,4.7],"markers":[4.4]}
    ];
  }

  ngOnInit() {
  }
}


