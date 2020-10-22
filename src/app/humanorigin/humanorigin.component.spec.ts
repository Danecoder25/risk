import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanoriginComponent } from './humanorigin.component';

describe('HumanoriginComponent', () => {
  let component: HumanoriginComponent;
  let fixture: ComponentFixture<HumanoriginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanoriginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanoriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
