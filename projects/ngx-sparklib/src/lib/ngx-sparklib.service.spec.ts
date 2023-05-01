import { TestBed } from '@angular/core/testing';

import { NgxSparklibService } from './ngx-sparklib.service';

describe('NgxSparklibService', () => {
  let service: NgxSparklibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSparklibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
