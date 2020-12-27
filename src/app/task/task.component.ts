import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() public parentData: string;
  public transport = ['Lyftning', 'Lastning', 'Packning', 'Transport', 'Lossning', 'Uppackning'];
  public commissioning = ['Justering av maskinen och dess komponenter', 'Montering av maskinen',
  'Anslutning till bortforslingssystem (t.ex. avgassystem, spillvatteninstallation)',
  'Anslutning till energiförsörjning (t.ex. strömförsörjning, tryckluft)',
  'Demonstration',
  'Matning, påfyllning, påfyllning av tillhörande vätskor (t.ex. smörjmedel, fett, lim)',
  'Uppsättning av inhägnad', 'Fastsättning, förankring', 'Förberedelser för installationen (t.ex. fundament, vibrationsdämpare)',
  'Körning av maskinen utan belastning', 'Provning', 'Provkörning med belastning eller maximal belastning'];
  public originalsettings = ['Justering och inställning av skyddsanordningar och andra komponenter',
  'Justering och inställning eller kontroll av maskinens funktionsparametrar (t.ex. hastighet, tryck, kraft, gränser för rörelser)',
  'Fastspänning/fastsättning av arbetsstycket', 'Matning, påfyllning, laddning av råmaterial', 'Funktionsprovning, provkörning',
  'Montering eller byte av verktyg, verktygsinställning', 'Kontroll av programmering', 'Kontroll av slutprodukten'];
  public operation = [
  'Fastspänning/fastsättning av arbetsstycket',
  'Kontroll/inspektion',
  'Körning av maskinen',
  'Matning, påfyllning, laddning av råmaterial',
  'Manuell insättning/uttagning',
  'Mindre justeringar och inställning av maskinens funktionsparametrar',
  'Mindre ingrepp under drift',
  'Manuell styrning',
  'Omstart av maskinen efter stopp/avbrott',
  'Övervakning',
  'Kontroll av slutprodukten'
];
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
