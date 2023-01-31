import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRebelleFormComponent } from './new-rebelle-form.component';

describe('NewRebelleFormComponent', () => {
  let component: NewRebelleFormComponent;
  let fixture: ComponentFixture<NewRebelleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRebelleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRebelleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
