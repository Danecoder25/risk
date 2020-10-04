import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencydurationComponent } from './frequencyduration.component';

describe('FrequencydurationComponent', () => {
  let component: FrequencydurationComponent;
  let fixture: ComponentFixture<FrequencydurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequencydurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencydurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
