import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesAddEditComponent } from './heroes-add-edit.component';

describe('HeroesAddEditComponent', () => {
  let component: HeroesAddEditComponent;
  let fixture: ComponentFixture<HeroesAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
