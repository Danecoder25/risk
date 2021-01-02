import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskyeventComponent } from './riskyevent.component';

describe('RiskyeventComponent', () => {
  let component: RiskyeventComponent;
  let fixture: ComponentFixture<RiskyeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskyeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskyeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
