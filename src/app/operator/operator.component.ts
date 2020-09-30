import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  @Input() public parentData: string;
  public transport = ['Truckförare', 'Lastkopplare'];
  public commissioning = ['Elinstallatör', 'Mekaniker', 'Programmerare'];
  public originalsettings = ['Justering och inställning av skyddsanordningar och andra komponenter',
  'Justering och inställning eller kontroll av maskinens funktionsparametrar (t.ex. hastighet, tryck, kraft, gränser för rörelser)',
  'Fastspänning/fastsättning av arbetsstycket', 'Matning, påfyllning, laddning av råmaterial', 'Funktionsprovning, provkörning',
  'Montering eller byte av verktyg, verktygsinställning', 'Kontroll av programmering', 'Kontroll av slutprodukten'];
  public operation = ['4', ''];
  public maintenance = ['5', ''];
  public faultfinding = ['6', ''];
  public scrapping = ['7', ''];

  constructor() { }

  ngOnInit() {
  }
  myFunction(value: string)  {
    this.parentData = value;
  }

}
