import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Studyfieldsresponse.ListComponent } from './studyfieldsresponse.list.component';

describe('Studyfieldsresponse.ListComponent', () => {
  let component: Studyfieldsresponse.ListComponent;
  let fixture: ComponentFixture<Studyfieldsresponse.ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Studyfieldsresponse.ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Studyfieldsresponse.ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
