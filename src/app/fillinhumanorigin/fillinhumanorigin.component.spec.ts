import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillinhumanoriginComponent } from './fillinhumanorigin.component';

describe('FillinhumanoriginComponent', () => {
  let component: FillinhumanoriginComponent;
  let fixture: ComponentFixture<FillinhumanoriginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillinhumanoriginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillinhumanoriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
