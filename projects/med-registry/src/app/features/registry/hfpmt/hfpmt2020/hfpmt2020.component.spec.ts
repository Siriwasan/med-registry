import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hfpmt2020Component } from './hfpmt2020.component';

describe('Hfpmt2020Component', () => {
  let component: Hfpmt2020Component;
  let fixture: ComponentFixture<Hfpmt2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hfpmt2020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hfpmt2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
