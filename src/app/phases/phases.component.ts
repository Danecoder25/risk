import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phases',
  templateUrl: './phases.component.html',
  styleUrls: ['./phases.component.css']
})
export class PhasesComponent implements OnInit {
  public lifecyclechoice = 'Transport';
  public lifecycles = ['Transport',
  'Montering och installation Idrifttagande',
  'Originalsettings',
  'Operation',
  'Maintenance',
  'Faultfinding',
  'Scrapping'];

  constructor() { }

  ngOnInit() {
  }
myFunction(value: string)  {
this.lifecyclechoice = value;
  }
}
