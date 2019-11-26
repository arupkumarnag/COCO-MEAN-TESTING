import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessTechnologyComponent } from './process-technology.component';

describe('ProcessTechnologyComponent', () => {
  let component: ProcessTechnologyComponent;
  let fixture: ComponentFixture<ProcessTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
