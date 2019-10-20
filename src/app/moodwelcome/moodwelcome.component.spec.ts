import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodwelcomeComponent } from './moodwelcome.component';

describe('MoodwelcomeComponent', () => {
  let component: MoodwelcomeComponent;
  let fixture: ComponentFixture<MoodwelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodwelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
