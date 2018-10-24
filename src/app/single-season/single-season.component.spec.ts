import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSeasonComponent } from './single-season.component';

describe('SingleSeasonComponent', () => {
  let component: SingleSeasonComponent;
  let fixture: ComponentFixture<SingleSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
