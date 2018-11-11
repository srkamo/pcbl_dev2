import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlayerFormComponent } from './update-player-form.component';

describe('UpdatePlayerFormComponent', () => {
  let component: UpdatePlayerFormComponent;
  let fixture: ComponentFixture<UpdatePlayerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePlayerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlayerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
