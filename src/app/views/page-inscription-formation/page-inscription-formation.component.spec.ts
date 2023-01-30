import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInscriptionFormationComponent } from './page-inscription-formation.component';

describe('PageInscriptionFormationComponent', () => {
  let component: PageInscriptionFormationComponent;
  let fixture: ComponentFixture<PageInscriptionFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageInscriptionFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageInscriptionFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
