import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-riskyevent',
  templateUrl: './riskyevent.component.html',
  styleUrls: ['./riskyevent.component.css']
})
export class RiskyeventComponent implements OnInit {
  @Input() public parentData: string;
  public mechanical = [
    'Kontakt med grova ytor',
    'Kontakt med vassa kanter och hörn, utstickande delar'
  ];
  public electrical = [
    'Kontakt med rörliga delar',
    'Kontakt med roterande öppna ändar'
  ];
  public heat = [
    'Föremål som faller eller slungas ut'
  ];
  public noise = [
    'Stabilitetsförlust'
  ];
  public vibration = [
    'Brott under drift'
  ];
  public radiation = [
    'Förskjutning av rörliga delar',
    'Utsprutning av gas eller vätska under högt tryck',
    'Okontrollerade rörelser'
  ];
  public substances = [
    'Direkt kontakt',
    'Gnisturladdning',
    'Ljusbåge',
    'Brand',
    'Indirekt kontakt',
    'Kortslutning'
  ];
  public ergonomical = [
    'En rörlig maskindel eller ett arbetsstycke som är fastspänt i maskinen tappas eller slungas ut',
    'Misslyckande att stoppa rörliga delar',
    'Beteende hos maskinen till följd av att skyddsanordningar upphör att fungera (medvetet satt ur funktion eller felfunktion)',
    'Okontrollerade rörelser (inklusive hastighetsändring)',
    'Oavsiktlig/oväntad start',
    'Andra riskfyllda händelser på grund av tekniska fel eller dålig konstruktion av styrsystemet'
  ];
  public environmental = [
    'Kontakt med föremål med hög eller låg temperatur',
    'Emission av ett ämne som kan vara farligt',
    'Bullernivå som kan vara farlig',
    'Bullernivå som kan störa ett muntligt meddelande eller akustiska signaler',
    'Vibrationsnivå som kan vara farlig',
    'Strålningsfält som kan vara farliga',
    'Svåra miljöförhållanden'
  ];
  public combinations = [
    'För stor ansträngning',
    'Mänskliga misstag/felaktigt uppträdande (oavsiktligt och/eller avsiktligt föranledda av konstruktionen)',
    'Förlust av direkt insyn i arbetsområdet',
    'Ansträngande och tröttande arbetsställningar',
    'Upprepade rörelser med hög frekvens'
  ];


  constructor() { }

  ngOnInit() {
  }

}
