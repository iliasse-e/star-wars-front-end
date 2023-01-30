import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClotureMissionComponent } from './page-cloture-mission.component';

describe('PageClotureMissionComponent', () => {
  let component: PageClotureMissionComponent;
  let fixture: ComponentFixture<PageClotureMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageClotureMissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageClotureMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
