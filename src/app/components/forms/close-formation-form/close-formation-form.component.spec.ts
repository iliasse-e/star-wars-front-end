import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseFormationFormComponent } from './close-formation-form.component';

describe('CloseFormationFormComponent', () => {
  let component: CloseFormationFormComponent;
  let fixture: ComponentFixture<CloseFormationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseFormationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseFormationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
