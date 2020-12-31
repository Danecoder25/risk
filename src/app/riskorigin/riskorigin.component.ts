import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-riskorigin',
  templateUrl: './riskorigin.component.html',
  styleUrls: ['./riskorigin.component.css']
})
export class RiskoriginComponent implements OnInit {
  public risksourcechoice = 'Mekaniska riskkällor';
  public risksources = [
  'Mekaniska riskkällor',
  'Elektriska riskkällor',
  'Värmeriskkällor',
  'Bullerriskkällor',
  'Vibrationsriskkällor',
  'Strålningsriskkällor',
  'Riskkällor förknippade med material/ämnen',
  'Ergonomiska riskkällor',
  'Riskkällor förknippade med den miljö där maskinen används',
  'Kombination av riskkällor'
  ];

  constructor() { }

  ngOnInit() {
  }

}
