import { TestBed } from '@angular/core/testing';

import { TrialSourceService } from './trialsource.service';

describe('TrialSourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrialSourceService = TestBed.get(TrialSourceService);
    expect(service).toBeTruthy();
  });
});
