import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risksource',
  templateUrl: './risksource.component.html',
  styleUrls: ['./risksource.component.css']
})
export class RisksourceComponent implements OnInit {
  public risksourcechoice = 'Mekaniska riskkällor';
  public risksources = ['Mekaniska riskkällor', 'Elektriska riskkällor', 'Originalsettings',
   'Operation', 'Maintenance', 'Faultfinding', 'Scrapping'];

  constructor() { }

  ngOnInit() {
  }
  myFunction(value: string)  {
    this.risksourcechoice = value;
      }
}
