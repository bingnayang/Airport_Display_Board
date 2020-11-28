import { TestBed } from '@angular/core/testing';

import { ArrivalBoardService } from './arrival-board.service';

describe('ArrivalBoardService', () => {
  let service: ArrivalBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrivalBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
