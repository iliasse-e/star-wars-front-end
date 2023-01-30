import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChasseurComponent } from './page-chasseur.component';

describe('PageChasseurComponent', () => {
  let component: PageChasseurComponent;
  let fixture: ComponentFixture<PageChasseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageChasseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageChasseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
