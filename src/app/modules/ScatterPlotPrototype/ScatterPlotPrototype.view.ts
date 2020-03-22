import { Component, OnInit} from '@angular/core';
import {StudyAIService} from '../../services_global/study.ai.service';


@Component({
  selector: 'ScatterPlotPrototype-View',
  templateUrl: './ScatterPlotPrototype.view.html',
  styleUrls: ['./ScatterPlotPrototype.view.scss']
})

export class ScatterPlotPrototypeView implements OnInit {
  $infoShown: boolean= false ; // hidden by default NOT working (?)

  $DATA: {
    data: Array<Array<number>>,
    IDs: Array<string>
  };

  $Service: StudyAIService;
  $SERVICE_STATUS = {
    LOADING: false,
    ERROR: false,
    STATUS: null
  };
  constructor(studyAIService: StudyAIService) {
    this.$Service = studyAIService;
    this.$DATA = null;
  }
  ngOnInit() {
    this.updateData();
    this.showInfo();
  }
  getCountData() {
    return this.$DATA ? this.$DATA.IDs.length : 0;
  }
  updateData() {
    this.$SERVICE_STATUS.LOADING = true;
    this.$SERVICE_STATUS.ERROR = false;
    this.$SERVICE_STATUS.STATUS = null;

    this.$Service.GetProjections({id: []}).then((result: {data: Array<Array<number>>, IDs: Array<string>}) => {
      console.log(JSON.stringify(result));
      this.$DATA = result;
      this.$SERVICE_STATUS.LOADING = false;
    }).catch((reason: any) => {
      console.error(JSON.stringify(reason));
      this.$SERVICE_STATUS.LOADING = false;
      this.$SERVICE_STATUS.ERROR = true;
      this.$SERVICE_STATUS.STATUS = reason;
    });
  }
  showInfo() {
    console.log("show info")
    console.log(this.$infoShown)
    this.$infoShown = ! this.$infoShown;
    console.log(this.$infoShown)
  }
}


