import { TestBed, inject } from '@angular/core/testing';

import { AuthorListService } from './author-list.service';

describe('AuthorListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorListService]
    });
  });

  it('should be created', inject([AuthorListService], (service: AuthorListService) => {
    expect(service).toBeTruthy();
  }));
});
