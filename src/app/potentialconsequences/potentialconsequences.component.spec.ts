import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialconsequencesComponent } from './potentialconsequences.component';

describe('PotentialconsequencesComponent', () => {
  let component: PotentialconsequencesComponent;
  let fixture: ComponentFixture<PotentialconsequencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotentialconsequencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialconsequencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
