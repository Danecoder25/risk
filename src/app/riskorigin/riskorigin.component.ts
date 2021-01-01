import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-riskorigin',
  templateUrl: './riskorigin.component.html',
  styleUrls: ['./riskorigin.component.css']
})
export class RiskoriginComponent implements OnInit {
  @Input() public parentData: string;
  public mechanical = [
    'acceleration, retardation',
    'kantiga delar',
    'rörlig del som närmar sig en fast del'
  ];
  public electrical = [
    '2Elektriska riskkällor'
  ];
  public heat = [
    '3Värmeriskkällor'
  ];
  public noise = [
    '4Bullerriskkällor'
  ];
  public vibration = [
    '5Vibrationsriskkällor'
  ];
  public radiation = [
    '6Strålningsriskkällor'
  ];
  public substances = [
    '7Riskkällor förknippade med material/ämnen'
  ];
  public ergonomical = [
    '8Ergonomiska riskkällor'
  ];
  public environmental = [
    '9Riskkällor förknippade med den miljö där maskinen används'
  ];
  public combinations = [
    '10Kombination av riskkällor'
  ];
  constructor() { }

  ngOnInit() {
  }
}
