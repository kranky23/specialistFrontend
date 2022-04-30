import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientResponseComponent } from './patient-response.component';

describe('PatientResponseComponent', () => {
  let component: PatientResponseComponent;
  let fixture: ComponentFixture<PatientResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
