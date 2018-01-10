import { TestBed, inject } from '@angular/core/testing';

import { ModeratorAuthGuardService } from './moderator-auth-guard.service';

describe('ModeratorAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModeratorAuthGuardService]
    });
  });

  it('should be created', inject([ModeratorAuthGuardService], (service: ModeratorAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
