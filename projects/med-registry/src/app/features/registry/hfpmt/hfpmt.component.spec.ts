import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HfpmtComponent } from './hfpmt.component';

describe('HfpmtComponent', () => {
  let component: HfpmtComponent;
  let fixture: ComponentFixture<HfpmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HfpmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HfpmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
