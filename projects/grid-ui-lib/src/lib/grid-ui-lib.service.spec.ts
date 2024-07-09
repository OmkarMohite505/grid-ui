import { TestBed } from '@angular/core/testing';

import { GridUiLibService } from './grid-ui-lib.service';

describe('GridUiLibService', () => {
  let service: GridUiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridUiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
