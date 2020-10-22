import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikelyhoodhazardouseventComponent } from './likelyhoodhazardousevent.component';

describe('LikelyhoodhazardouseventComponent', () => {
  let component: LikelyhoodhazardouseventComponent;
  let fixture: ComponentFixture<LikelyhoodhazardouseventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikelyhoodhazardouseventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikelyhoodhazardouseventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
