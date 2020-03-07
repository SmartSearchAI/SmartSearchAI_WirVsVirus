import { Component, OnInit, OnDestroy} from '@angular/core';
import {StudyAIService} from '../../services_global/study.ai.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'MatchMaker-View',
  templateUrl: './MatchMaker.view.html',
  styleUrls: ['./MatchMaker.view.scss']
})

export class MatchMakerView implements OnInit, OnDestroy {
  ids: string;
  private sub: any;
  $IDs: Array<string>;
  $DATA: {
    data: Array<Array<number>>,
    IDs: Array<string>
  };
  $IDs_Select: Array<string>;

  $Service: StudyAIService;
  $SERVICE_STATUS = {
    LOADING: false,
    ERROR: false,
    STATUS: null
  };
  constructor(studyAIService: StudyAIService, private route: ActivatedRoute) {
    this.$Service = studyAIService;
    this.$DATA = null;
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.ids = params['ids'] ? JSON.parse(params['ids']) : [];
      this.requestAvailableData();
   });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onInputChanged() {

  }
  requestAvailableData() {
    this.$SERVICE_STATUS.LOADING = true;
    this.$SERVICE_STATUS.ERROR = false;
    this.$SERVICE_STATUS.STATUS = null;

    this.$Service.GetAvailableData().then((IDs: any) => {
      this.$IDs = IDs;
      this.updateData(IDs);
      this.$SERVICE_STATUS.LOADING = false;
    }).catch((reason: any) => {
      console.error(JSON.stringify(reason));
      this.$SERVICE_STATUS.LOADING = false;
      this.$SERVICE_STATUS.ERROR = true;
      this.$SERVICE_STATUS.STATUS = reason;
    });
  }
  getCountData() {
    return this.$DATA ? this.$DATA.IDs.length : 0;
  }
  updateData(IDs: Array<string>) {
    IDs = IDs ? IDs : this.$IDs;
    this.$SERVICE_STATUS.LOADING = true;
    this.$SERVICE_STATUS.ERROR = false;
    this.$SERVICE_STATUS.STATUS = null;

    this.$Service.GetProjections({id: IDs}).then((result: {data: Array<Array<number>>, IDs: Array<string>}) => {
      this.$DATA = result;
      this.$SERVICE_STATUS.LOADING = false;
    }).catch((reason: any) => {
      console.error(JSON.stringify(reason));
      this.$SERVICE_STATUS.LOADING = false;
      this.$SERVICE_STATUS.ERROR = true;
      this.$SERVICE_STATUS.STATUS = reason;
    });
  }
}


