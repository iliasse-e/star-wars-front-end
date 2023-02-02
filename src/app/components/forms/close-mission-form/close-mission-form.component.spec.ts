import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseMissionFormComponent } from './close-mission-form.component';

describe('CloseMissionFormComponent', () => {
  let component: CloseMissionFormComponent;
  let fixture: ComponentFixture<CloseMissionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseMissionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseMissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
