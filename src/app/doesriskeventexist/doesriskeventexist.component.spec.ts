import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoesriskeventexistComponent } from './doesriskeventexist.component';

describe('DoesriskeventexistComponent', () => {
  let component: DoesriskeventexistComponent;
  let fixture: ComponentFixture<DoesriskeventexistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoesriskeventexistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoesriskeventexistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
