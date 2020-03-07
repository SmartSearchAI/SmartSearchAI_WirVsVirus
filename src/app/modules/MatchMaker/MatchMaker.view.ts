import { Component, OnInit, OnDestroy} from '@angular/core';
import {StudyAIService} from '../../services_global/study.ai.service';
import { ActivatedRoute, Router, NavigationStart} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'MatchMaker-View',
  templateUrl: './MatchMaker.view.html',
  styleUrls: ['./MatchMaker.view.scss']
})

export class MatchMakerView implements OnInit, OnDestroy {
  ids: string;
  private sub: any = {};
  $IDs: Array<string> = [];
  $IDs_Select: Array<string> = [];
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
  constructor(studyAIService: StudyAIService, private route: ActivatedRoute, private router: Router) {
    this.$Service = studyAIService;
    this.$DATA = null;
  }
  ngOnInit() {
    this.sub.params = this.route.params.subscribe(params => {
      this.ids = params['ids'] ? JSON.parse(params['ids']) : [];
      this.requestAvailableData();
    });

    this.router.events.pipe(filter(event => event instanceof NavigationStart))
      .subscribe(this.OnRouterEvent.bind(this));
  }

  ngOnDestroy() {
    this.sub.params.unsubscribe();
  }

  OnRouterEvent(e) {
      const url = e.url.split('/');
      if (url.includes('select')) {
        this.selectItem(url[url.length - 1]);
      }
      console.log(e);
  }

  selectItem(id: string) {
    this.$IDs_Select.push(id);
    this.$IDs_Select = [...new Set(this.$IDs_Select)];
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


