import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwarenessofhazardComponent } from './awarenessofhazard.component';

describe('AwarenessofhazardComponent', () => {
  let component: AwarenessofhazardComponent;
  let fixture: ComponentFixture<AwarenessofhazardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwarenessofhazardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwarenessofhazardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
