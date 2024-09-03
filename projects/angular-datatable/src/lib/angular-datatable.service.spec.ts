import { TestBed } from '@angular/core/testing';

import { AngularDatatableService } from './angular-datatable.service';

describe('AngularDatatableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularDatatableService = TestBed.get(AngularDatatableService);
    expect(service).toBeTruthy();
  });
});
