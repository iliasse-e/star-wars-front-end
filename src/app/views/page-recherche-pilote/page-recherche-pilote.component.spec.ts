import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecherchePiloteComponent } from './page-recherche-pilote.component';

describe('PageRecherchePiloteComponent', () => {
  let component: PageRecherchePiloteComponent;
  let fixture: ComponentFixture<PageRecherchePiloteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRecherchePiloteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRecherchePiloteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
