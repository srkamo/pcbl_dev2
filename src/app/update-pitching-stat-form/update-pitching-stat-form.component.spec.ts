import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePitchingStatFormComponent } from './update-pitching-stat-form.component';

describe('UpdatePitchingStatFormComponent', () => {
  let component: UpdatePitchingStatFormComponent;
  let fixture: ComponentFixture<UpdatePitchingStatFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePitchingStatFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePitchingStatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
