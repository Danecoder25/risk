import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskoriginComponent } from './riskorigin.component';

describe('RiskoriginComponent', () => {
  let component: RiskoriginComponent;
  let fixture: ComponentFixture<RiskoriginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskoriginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskoriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
