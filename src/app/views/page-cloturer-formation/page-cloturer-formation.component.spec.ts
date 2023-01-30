import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCloturerFormationComponent } from './page-cloturer-formation.component';

describe('PageCloturerFormationComponent', () => {
  let component: PageCloturerFormationComponent;
  let fixture: ComponentFixture<PageCloturerFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCloturerFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCloturerFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
