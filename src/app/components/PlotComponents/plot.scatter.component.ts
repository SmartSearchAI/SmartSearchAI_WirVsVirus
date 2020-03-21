import { Component, OnChanges, AfterViewInit, SimpleChanges, Input, ViewChild, HostListener} from '@angular/core';
import { EChartsComponent } from '@amcdnl/ngx-echarts';

const xAxisData = [];
const yAxisData = [];

@Component({
  selector: 'plot-scatter',
  templateUrl: './plot.scatter.component.html',
  styleUrls: ['./plot.scatter.component.scss']
})

export class PlotScatterComponent implements OnChanges, AfterViewInit {
  @Input() $Ids: Array<string>;
  @Input() $Data: Array<Array<number>>;
  @ViewChild(EChartsComponent, {static: false}) $chart:EChartsComponent;
  $xAxis = {
    scale: true,
    data: xAxisData
  };
  $yAxis = {
    scale: true,
    data: yAxisData
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
    const data = this.$Ids.map((id, i) => {
      const xy = this.$Data[i];
      return [xy[0], xy[1], id];
    });
    // Update Chart
    this.$series = [{
      data,
      type: 'scatter',
      symbolSize: 10
    }];
  }
}
