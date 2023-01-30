import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRebelleComponent } from './page-rebelle.component';

describe('PageRebelleComponent', () => {
  let component: PageRebelleComponent;
  let fixture: ComponentFixture<PageRebelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRebelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRebelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
