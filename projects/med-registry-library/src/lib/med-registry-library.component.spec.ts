import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedRegistryLibraryComponent } from './med-registry-library.component';

describe('MedRegistryLibraryComponent', () => {
  let component: MedRegistryLibraryComponent;
  let fixture: ComponentFixture<MedRegistryLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedRegistryLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedRegistryLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
