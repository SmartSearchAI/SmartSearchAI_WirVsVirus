import { Component, OnChanges, AfterViewInit, SimpleChanges, Input, ViewChild, HostListener} from '@angular/core';
import { EChartsComponent } from '@amcdnl/ngx-echarts';

function randn_bm() {
  let u = 0;
  let v = 0;
  while (u === 0) {
    u = Math.random(); // Converting [0,1) to (0,1)
  }
  while (v === 0) {
    v = Math.random();
  }
  let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) {
    return randn_bm(); // resample between 0 and 1
  }
  return num;
}

@Component({
  selector: 'study-scatter',
  templateUrl: './Study.scatter.component.html',
  styleUrls: ['./Study.scatter.component.scss']
})

export class StudyScatterComponent implements OnChanges, AfterViewInit {
  @Input() $Ids: Array<string>;
  @Input() $Data: Array<{x: number, y: number, value: number}>;
  @ViewChild(EChartsComponent, {static: false}) $chart:EChartsComponent;
  $xAxis = {
    scale: true
  };
  $yAxis = {
    scale: true
  };
  $tooltip = {
    trigger: 'item',
    formatter: function (param) {
        return param.data[2];
    }
  };
  $series = [];

  ngAfterViewInit() {
    this.resize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resize();
  }

  onChartClick(event) {
    console.log(event.data);
  }
  resize() {
    console.log(this.$chart);
    this.$chart.resize();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const id_data = this.$Ids.map((id) => {
      return [randn_bm(), randn_bm(), id];
    });
    // Update Chart
    this.$series = [{
      data: id_data,
      type: 'scatter',
      symbolSize: 10
    }];
  }
}
