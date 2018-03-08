import { TestBed, inject } from '@angular/core/testing';

import { PreventUnsavedChanges } from './prevent-unsaved-changes';

describe('PreventUnsavedChanges', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreventUnsavedChanges]
    });
  });

  it('should be created', inject([PreventUnsavedChanges], (service: PreventUnsavedChanges) => {
    expect(service).toBeTruthy();
  }));
});
