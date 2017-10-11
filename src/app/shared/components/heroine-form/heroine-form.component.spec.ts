import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroineFormComponent } from './heroine-form.component';

describe('HeroineFormComponent', () => {
  let component: HeroineFormComponent;
  let fixture: ComponentFixture<HeroineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroineFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
