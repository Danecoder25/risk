import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorisksituationComponent } from './norisksituation.component';

describe('NorisksituationComponent', () => {
  let component: NorisksituationComponent;
  let fixture: ComponentFixture<NorisksituationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorisksituationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorisksituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
