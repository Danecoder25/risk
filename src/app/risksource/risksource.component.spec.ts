import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisksourceComponent } from './risksource.component';

describe('RisksourceComponent', () => {
  let component: RisksourceComponent;
  let fixture: ComponentFixture<RisksourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisksourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisksourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
