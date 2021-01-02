import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fillintechnicalorigin',
  templateUrl: './fillintechnicalorigin.component.html',
  styleUrls: ['./fillintechnicalorigin.component.css']
})
export class FillintechnicaloriginComponent implements OnInit {

  public lifecyclechoice = 'Form och/eller ytfinish på åtkomliga delar på maskinen';
  public lifecycles = [
  'Form och/eller ytfinish på åtkomliga delar på maskinen',
  'Maskinens rörliga delar',
  // tslint:disable-next-line: max-line-length
  'Kinetisk energi och/eller lägesenergi (tyngdkraft) hos maskinen, maskinens delar, verktyg och material som används, bearbetas och hanteras',
  'Stabilitet hos maskinen och/eller delar av den',
  'Mekanisk hållfasthet hos maskinens delar, verktyg etc.',
  'Pneumatisk, hydraulisk utrustning',
  'Elektrisk utrustning',
  'Styrsystem',
  'Material och ämnen eller fysiska faktorer (temperatur, buller, vibrationer,strålning och miljö)',
  'Utformning av arbetsstation och/eller arbetsprocess'
];

  constructor() { }

  ngOnInit() {
  }
  myFunction(value: string)  {
    this.lifecyclechoice = value;
  }
}
