import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyvalueComponent } from './frequencyvalue.component';

describe('FrequencyvalueComponent', () => {
  let component: FrequencyvalueComponent;
  let fixture: ComponentFixture<FrequencyvalueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequencyvalueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencyvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
