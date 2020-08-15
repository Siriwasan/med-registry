import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrScheduleListComponent } from './or-schedule-list.component';

describe('OrScheduleListComponent', () => {
  let component: OrScheduleListComponent;
  let fixture: ComponentFixture<OrScheduleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrScheduleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrScheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
