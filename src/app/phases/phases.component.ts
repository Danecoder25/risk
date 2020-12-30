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
  'Inställning Inlärning/programmering och/eller processbyte',
  'Drift',
  'Rengöring Underhåll',
  'Felsökning/Felavhjälpning',
  'Nedmontering Skrotning'];

  constructor() { }

  ngOnInit() {
  }
myFunction(value: string)  {
this.lifecyclechoice = value;
  }
}
