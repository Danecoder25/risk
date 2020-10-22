import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicaloriginComponent } from './technicalorigin.component';

describe('TechnicaloriginComponent', () => {
  let component: TechnicaloriginComponent;
  let fixture: ComponentFixture<TechnicaloriginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicaloriginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicaloriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
