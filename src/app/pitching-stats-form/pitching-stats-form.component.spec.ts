import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchingStatsFormComponent } from './pitching-stats-form.component';

describe('PitchingStatsFormComponent', () => {
  let component: PitchingStatsFormComponent;
  let fixture: ComponentFixture<PitchingStatsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchingStatsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchingStatsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
