import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyvaluetwoComponent } from './frequencyvaluetwo.component';

describe('FrequencyvaluetwoComponent', () => {
  let component: FrequencyvaluetwoComponent;
  let fixture: ComponentFixture<FrequencyvaluetwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequencyvaluetwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencyvaluetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
