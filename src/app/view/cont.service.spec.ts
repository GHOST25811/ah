import { TestBed } from '@angular/core/testing';

import { ContService } from './cont.service';

describe('ContService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContService = TestBed.get(ContService);
    expect(service).toBeTruthy();
  });
});
