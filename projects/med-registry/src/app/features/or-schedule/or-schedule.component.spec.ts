import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrScheduleComponent } from './or-schedule.component';

describe('OrScheduleComponent', () => {
  let component: OrScheduleComponent;
  let fixture: ComponentFixture<OrScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
