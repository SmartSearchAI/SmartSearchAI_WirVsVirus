import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-HWPL-App',
  templateUrl: './HWPL_Dashboard_component.html',
  styleUrls: ['./HWPL_Dashboard_component.scss']
})

class HWPL {
  title: string;
  subtitle: string;
  ranges: Array<Number>;
  measures: Array<Number>;
  markers: Array<Number>;
}

export class HWPLDashboardComponent implements OnInit {
  data: Array<HWPL>;
  margin: {top: number; right: number; bottom: number; left: number};
  height: number;
  width: number;
  chart = {};
  constructor() {
    this.data = [
      {"title":"Revenue","subtitle":"US$, in thousands","ranges":[150,225,300],"measures":[220,270],"markers":[250]},
      {"title":"Profit","subtitle":"%","ranges":[20,25,30],"measures":[21,23],"markers":[26]},
      {"title":"Order Size","subtitle":"US$, average","ranges":[350,500,600],"measures":[100,320],"markers":[550]},
      {"title":"New Customers","subtitle":"count","ranges":[1400,2000,2500],"measures":[1000,1650],"markers":[2100]},
      {"title":"Satisfaction","subtitle":"out of 5","ranges":[3.5,4.25,5],"measures":[3.2,4.7],"markers":[4.4]}
    ];
    this.margin = {top: 5, right: 40, bottom: 20, left: 120};
    this.width = 960 - this.margin.left - this.margin.right;
    this.height = 50 - this.margin.top - this.margin.bottom;
    /*this.chart = d3.bullet()
      .width(this.width)
      .height(this.height);*/
  }

  ngOnInit() {
    /*
    var width = this.width;
    var height = this.height;
    var margin = this.margin;

    var svg = d3.select("body").selectAll("svg")
      .data(this.data)
    .enter().append("svg")
      .attr("class", "bullet")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .call(this.chart);

  var title = svg.append("g")
      .style("text-anchor", "end")
      .attr("transform", "translate(-6," + height / 2 + ")");

    title.append("text")
        .attr("class", "title")
        .text(function(d) { return d.title; });

    title.append("text")
        .attr("class", "subtitle")
        .attr("dy", "1em")
        .text(function(d) { return d.subtitle; });
    */
  }
}


