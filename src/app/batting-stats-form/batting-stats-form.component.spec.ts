import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattingStatsFormComponent } from './batting-stats-form.component';

describe('BattingStatsFormComponent', () => {
  let component: BattingStatsFormComponent;
  let fixture: ComponentFixture<BattingStatsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattingStatsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattingStatsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
