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
    'rörlig del som närmar sig en fast del',
    'skärande delar',
    'elastiska delar',
    'fallande föremål',
    'gravitation',
    'höjd från marken',
    'högtryck',
    'instabilitet',
    'kinetisk energi',
    'maskinens mobilitet',
    'rörliga delar',
    'roterande delar',
    'ojämn, hal yta',
    'vassa kanter',
    'lagrad energi',
    'vakuum'
  ];
  public electrical = [
    'ljusbåge',
    'elektromagnetiska fenomen',
    'elektrostatiska fenomen',
    'spänningsförande delar',
    'inte tillräckligt avstånd till',
    'spänningsförande högspänningsdelar',
    'överbelastning',
    'delar som har blivit',
    'spänningssatta vid feltillstånd',
    'kortslutning',
    'värmestrålning'
  ];
  public heat = [
    'explosion',
    'flammor',
    'föremål eller material med hög eller låg temperatur',
    'strålning från värmekällor'
  ];
  public noise = [
    'kavitationsfenomen',
    'utblåsningssystem',
    'gas som läcker vid hög hastighet',
    'tillverkningsprocess (pressning, skärning etc.)',
    'rörliga delar',
    'skrapande ytor',
    'obalanserade roterande delar',
    'tjutande tryckluft',
    'slitna delar',
  ];
  public vibration = [
    'kavitationsfenomen',
    'felaktig inställning av rörliga delar',
    'mobil utrustning',
    'skrapande ytor',
    'obalanserade roterande delar',
    'vibrerande utrustning',
    'slitna delar'
  ];
  public radiation = [
    'joniserande strålningskälla',
    'lågfrekvent elektromagnetisk strålning',
    'optisk strålning (infraröd, synlig och ultraviolett), inklusive laser',
    'radiofrekvent elektromagnetisk strålning'
  ];
  public substances = [
    'aerosol',
    'biologiska och mikrobiologiska (virus eller bakterier) medel',
    'brännbart',
    'damm',
    'explosivt',
    'fibrer',
    'lättantändligt',
    'flytande',
    'ånga',
    'gas',
    'dimma',
    'oxidator'
  ];
  public ergonomical = [
    'tillgänglighet',
    'konstruktion och placering av indikeringsanordningar och displayer',
    'konstruktion, placering eller märkning av manöverdon',
    'ansträngning',
    'flimmer, bländning, skugga, stroboskopisk effekt',
    'platsbelysning',
    'mental över- eller underbelastning',
    'arbetsställning',
    'upprepade rörelser/aktiviteter',
    'sikt'
  ];
  public environmental = [
    'damm och dimma',
    'elektromagnetiska störningar',
    'belysning',
    'fukt',
    'utsläpp',
    'snö',
    'temperatur',
    'vatten',
    'vind',
    'syrebrist',
  ];
  public combinations = [
    'T.ex. upprepade rörelser + ansträngning + hög omgivningstemperatur'
  ];
  constructor() { }

  ngOnInit() {
  }
}
