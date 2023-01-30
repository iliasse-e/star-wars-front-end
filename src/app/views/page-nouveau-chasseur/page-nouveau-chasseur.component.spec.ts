import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouveauChasseurComponent } from './page-nouveau-chasseur.component';

describe('PageNouveauChasseurComponent', () => {
  let component: PageNouveauChasseurComponent;
  let fixture: ComponentFixture<PageNouveauChasseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNouveauChasseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNouveauChasseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
