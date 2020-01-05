import { Component, OnInit, OnChanges, Input, SimpleChanges} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'study-D3-scatter',
  templateUrl: './Study.D3.scatter.component.html',
  styleUrls: ['./Study.D3.scatter.component.scss']
})

export class StudyD3ScatterComponent implements OnInit, OnChanges {
  @Input() $Ids: Array<string>;
  @Input() $Data: Array<{x: number, y: number, value: number}>;
  private D3DOM: {
    id: string,
    width: number,
    height: number
  };
  constructor() {
    this.D3DOM = {
      id: 'StudyD3Scatter',
      width: null,
      height: null
    };
  }

  ngOnInit() {
    // Render Initial Input
    this.updateChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateChart();
  }

  updateChart() {
    // Remove whatever chart with the same id/class was present before
    let element = d3.select(`#${this.D3DOM.id}`);
    element.select('svg').remove();
    element = document.getElementById(this.D3DOM.id);
    const margin = {top: 20, right: 20, bottom: 30, left: 40};
    const width = (element.offsetWidth ? element.offsetWidth : 450) - margin.top - margin.bottom;
    const height = width - margin.left - margin.right;


    const data = this.$Ids.map((Id) => {
      return {
        X: Math.random().toFixed(3),
        Y: Math.random().toFixed(3),
        C: Math.random().toFixed(3),
        Label: Id
      };
    });

    // append the svg object to the body of the page
    const svg = d3.select(`#${this.D3DOM.id}`)
      .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform',
              'translate(' + margin.left + ',' + margin.top + ')');

    // Add X axis
    const x = d3.scaleLinear()
      .domain([0, 1])
      .range([ 0, width ]);
    svg.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, 1])
      .range([ height, 0]);
    svg.append('g')
        .call(d3.axisLeft(y));

    // Add dots
    svg.append('g')
      .selectAll('dot')
      .data(data)
      .enter()
      .append('circle')
        .attr('cx', function (d) { return d.X; } )
        .attr('cy', function (d) { return d.Y; } )
        .attr('r', 1.5)
        .style('fill', '#69b3a2');
  }
}
