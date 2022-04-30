import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistViewComponent } from './specialist-view.component';

describe('SpecialistViewComponent', () => {
  let component: SpecialistViewComponent;
  let fixture: ComponentFixture<SpecialistViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialistViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
