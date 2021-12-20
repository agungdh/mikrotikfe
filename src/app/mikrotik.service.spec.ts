import { TestBed } from '@angular/core/testing';

import { MikrotikService } from './mikrotik.service';

describe('MikrotikService', () => {
  let service: MikrotikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MikrotikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
