import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePiloteComponent } from './page-pilote.component';

describe('PagePiloteComponent', () => {
  let component: PagePiloteComponent;
  let fixture: ComponentFixture<PagePiloteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePiloteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePiloteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
