import { TestBed } from '@angular/core/testing';

import { SpecialistLoginService } from './specialist-login.service';

describe('SpecialistLoginService', () => {
  let service: SpecialistLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialistLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
