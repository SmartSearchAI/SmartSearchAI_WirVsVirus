import { Component, OnInit, Input, OnChanges} from '@angular/core';
import {Entity, Score} from '../../../Models/Questionair_Model';
import * as d3 from "d3";
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'Score-Piechart-Component',
  templateUrl: './score.piechart.component.html',
  styleUrls: ['./score.piechart.component.scss']
})

export class ScorePieChartComponent implements OnInit {
  @Input() Entities: Array<Entity>;
  @Input() Scores: Array<Score>;
  svg: any;
  radius: Number;
  ngOnInit() {
        // set the dimensions and margins of the graph
    var width = document.getElementById("my_dataviz").offsetWidth;
    var height = 450;
    var margin = 40;

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    this.radius = Math.min(width, height) / 2 - margin

    this.svg = d3.select("#my_dataviz")
      .append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  }

  ngOnChanges(changes){
    if(this.Scores.length){
      this.updateChart(this.Scores[0]);
    }
    console.log(changes);

  }

  onShowScore(score: Score){
    this.updateChart(score);
  }

  updateChart(score: Score){
    var data = {};
    var domain = [];
    var test: string = "Test";
    this.Entities.forEach((entity, index)=>{
        domain.push(entity.Name);
        data[stringify(entity.Name)] = score.Values[index];
    });
    // set the color scale
    var color = d3.scaleOrdinal()
      .domain(domain)
      .range(d3.schemeDark2);
    
    // Compute the position of each group on the pie:
    var pie = d3.pie()
      .value(function(d) {return d.value; })
      .sort(function(a, b) { console.log(a) ; return d3.ascending(a.key, b.key);} ) // This make sure that group order remains the same in the pie chart
    
    var data_ready = pie(d3.entries(data));

    // map to data
    var u = this.svg.selectAll("path").data(data_ready)

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    u.enter()
      .append('path')
      .merge(u)
      .transition()
      .duration(1000)
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(this.radius)
      )
      .attr('fill', function(d){ return(color(d.data.key)) })
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 1)

    // remove the group that is not present anymore
    u.exit().remove()
  }
}


