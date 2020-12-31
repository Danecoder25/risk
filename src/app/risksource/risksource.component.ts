import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-risksource',
  templateUrl: './risksource.component.html',
  styleUrls: ['./risksource.component.css']
})
export class RisksourceComponent implements OnInit {
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
  myFunction(value: string)  {
    this.risksourcechoice = value;
      }
}
