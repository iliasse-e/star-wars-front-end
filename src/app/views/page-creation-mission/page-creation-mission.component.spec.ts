import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreationMissionComponent } from './page-creation-mission.component';

describe('PageCreationMissionComponent', () => {
  let component: PageCreationMissionComponent;
  let fixture: ComponentFixture<PageCreationMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCreationMissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCreationMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
