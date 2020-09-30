import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisksituationComponent } from './risksituation.component';

describe('RisksituationComponent', () => {
  let component: RisksituationComponent;
  let fixture: ComponentFixture<RisksituationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisksituationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisksituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
