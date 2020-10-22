import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillintechnicaloriginComponent } from './fillintechnicalorigin.component';

describe('FillintechnicaloriginComponent', () => {
  let component: FillintechnicaloriginComponent;
  let fixture: ComponentFixture<FillintechnicaloriginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillintechnicaloriginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillintechnicaloriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
