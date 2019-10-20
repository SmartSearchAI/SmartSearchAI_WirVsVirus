import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDiaryComponent } from './display-diary.component';

describe('DisplayDiaryComponent', () => {
  let component: DisplayDiaryComponent;
  let fixture: ComponentFixture<DisplayDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
