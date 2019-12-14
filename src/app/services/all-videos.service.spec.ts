import { TestBed } from '@angular/core/testing';

import { AllVideosService } from './all-videos.service';

describe('AllVideosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllVideosService = TestBed.get(AllVideosService);
    expect(service).toBeTruthy();
  });
});
