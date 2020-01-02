import { TestBed } from '@angular/core/testing';
import { StudySourceService } from './study.source.service';
import { HttpClient } from '@angular/common/http';

describe('TrialSourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudySourceService = TestBed.get(StudySourceService);
    expect(service).toBeTruthy();
  });
});
