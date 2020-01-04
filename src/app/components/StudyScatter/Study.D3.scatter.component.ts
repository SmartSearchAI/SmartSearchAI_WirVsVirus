import { Component, OnInit, Input} from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'study-D3-scatter',
  templateUrl: './Study.D3.scatter.component.html',
  styleUrls: ['./Study.D3.scatter.component.scss']
})

export class StudyD3ScatterComponent implements OnInit {
  @Input() $Ids: Array<string>;
  @Input() $Data: Array<{x: number, y: number, value: number}>;
  private D3DOM: {
    id: string,
    svg: any,
    width: number,
    height: number,
    margin: number
  };
  constructor() {
    this.D3DOM = {
      id: '#StudyD3Scatter',
      svg: null,
      width: null,
      height: null,
      margin: null
    };
  }

  ngOnInit() {
    const _id = this.D3DOM.id;
    this.D3DOM.svg = document.getElementById(_id);
    this.D3DOM.width = this.D3DOM.svg.offsetWidth;
    this.D3DOM.height = this.D3DOM.svg.offsetHeight ? this.D3DOM.svg.offsetHeight : 450;
    const width = this.D3DOM.width;
    const height = this.D3DOM.height;
    this.D3DOM.svg = d3.select(this.D3DOM.id)
    .append('svg')
      .attr('width', width)
      .attr('height', height)
    .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})` );

    this.updateChart();
  }

  updateChart(){
    const data = this.$Data;
    const labels = this.$Ids;
  }
}


