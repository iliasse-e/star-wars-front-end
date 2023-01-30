import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDesaffecterChasseurComponent } from './page-desaffecter-chasseur.component';

describe('PageDesaffecterChasseurComponent', () => {
  let component: PageDesaffecterChasseurComponent;
  let fixture: ComponentFixture<PageDesaffecterChasseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDesaffecterChasseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDesaffecterChasseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
