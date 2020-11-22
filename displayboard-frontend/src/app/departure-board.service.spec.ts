import { TestBed } from '@angular/core/testing';

import { DepartureBoardService } from './departure-board.service';

describe('DepartureBoardService', () => {
  let service: DepartureBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartureBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
