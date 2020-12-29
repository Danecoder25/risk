import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() public parentData: string;
  public transport = [
  'Lyftning',
  'Lastning',
  'Packning',
  'Transport',
  'Lossning',
  'Uppackning'];
  public commissioning = [
  'Justering av maskinen och dess komponenter',
  'Montering av maskinen',
  'Anslutning till bortforslingssystem (t.ex. avgassystem, spillvatteninstallation)',
  'Anslutning till energiförsörjning (t.ex. strömförsörjning, tryckluft)',
  'Demonstration',
  'Matning, påfyllning, påfyllning av tillhörande vätskor (t.ex. smörjmedel, fett, lim)',
  'Uppsättning av inhägnad',
  'Fastsättning, förankring',
  'Förberedelser för installationen (t.ex. fundament, vibrationsdämpare)',
  'Körning av maskinen utan belastning',
  'Provning',
  'Provkörning med belastning eller maximal belastning'];
  public originalsettings = [
  'Justering och inställning av skyddsanordningar och andra komponenter',
  'Justering och inställning eller kontroll av maskinens funktionsparametrar (t.ex. hastighet, tryck, kraft, gränser för rörelser)',
  'Fastspänning/fastsättning av arbetsstycket',
  'Matning, påfyllning, laddning av råmaterial',
  'Funktionsprovning, provkörning',
  'Montering eller byte av verktyg, verktygsinställning',
  'Kontroll av programmering',
  'Kontroll av slutprodukten'];
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
  public maintenance = [
  'Justeringar',
  'Rengöring, desinficering',
  'Demontering/borttagning av delar, komponenter, enheter på maskinen',
  'Städning',
  'Isolering och energiavlastning',
  'Smörjning',
  'Byte av verktyg',
  'Byte av utslitna delar',
  'Återställning',
  'Återställning av vätskenivåer',
  'Kontroll av delar, komponenter, enheter på maskinen'
];
  public faultfinding = [
'Justeringar',
'Demontering/borttagning av delar, komponenter, anordningar på maskinen',
'Felsökning',
'Frånskiljning och energiavlastning',
'Återställning efter fel på styr- och skyddsenheter',
'Återställning efter trassel',
'Reparation',
'Byte av delar, komponenter, anordningar på maskinen',
'Räddning av personer som fastnat',
'Återställning',
'Kontroll av delar, komponenter, anordningar på maskinen'
  ];
  public scrapping = [
'Frånkoppling och energiavlastning',
'Nedmontering',
'Lyftning',
'Lastning',
'Packning',
'Transport',
'Lossning',
  ];
  constructor() { }
  ngOnInit() {
  }
  myFunction(value: string)  {
    this.parentData = value;
  }
}
