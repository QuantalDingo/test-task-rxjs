import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthTaskComponent } from './sixth-task.component';

describe('SixthTaskComponent', () => {
  let component: SixthTaskComponent;
  let fixture: ComponentFixture<SixthTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixthTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
