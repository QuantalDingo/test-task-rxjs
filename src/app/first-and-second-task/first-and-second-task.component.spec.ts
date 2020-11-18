import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAndSecondTaskComponent } from './first-and-second-task.component';

describe('FirstAndSecondTaskComponent', () => {
  let component: FirstAndSecondTaskComponent;
  let fixture: ComponentFixture<FirstAndSecondTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstAndSecondTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAndSecondTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
