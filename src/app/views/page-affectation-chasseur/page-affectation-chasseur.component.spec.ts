import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAffectationChasseurComponent } from './page-affectation-chasseur.component';

describe('PageAffectationChasseurComponent', () => {
  let component: PageAffectationChasseurComponent;
  let fixture: ComponentFixture<PageAffectationChasseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAffectationChasseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAffectationChasseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
