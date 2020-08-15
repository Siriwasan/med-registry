import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrScheduleDetailComponent } from './or-schedule-detail.component';

describe('OrScheduleDetailComponent', () => {
  let component: OrScheduleDetailComponent;
  let fixture: ComponentFixture<OrScheduleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrScheduleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrScheduleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
