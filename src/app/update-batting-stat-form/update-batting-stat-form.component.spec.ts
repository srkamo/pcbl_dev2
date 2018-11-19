import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBattingStatFormComponent } from './update-batting-stat-form.component';

describe('UpdateBattingStatFormComponent', () => {
  let component: UpdateBattingStatFormComponent;
  let fixture: ComponentFixture<UpdateBattingStatFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBattingStatFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBattingStatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
