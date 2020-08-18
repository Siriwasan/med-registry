import { TestBed } from '@angular/core/testing';

import { MedRegistryLibraryService } from './med-registry-library.service';

describe('MedRegistryLibraryService', () => {
  let service: MedRegistryLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedRegistryLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
