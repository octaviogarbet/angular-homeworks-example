import { TestBed } from '@angular/core/testing';

import { HomeworksServiceService } from './homeworks-service.service';

describe('HomeworksServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeworksServiceService = TestBed.get(HomeworksServiceService);
    expect(service).toBeTruthy();
  });
});
