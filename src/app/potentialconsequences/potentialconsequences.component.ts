import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-potentialconsequences',
  templateUrl: './potentialconsequences.component.html',
  styleUrls: ['./potentialconsequences.component.css']
})
export class PotentialconsequencesComponent implements OnInit {

  @Input() public parentData: string;
  public mechanical = [
    'överkörning',
    'omkullkastning',
    'krossning',
    'avslitning eller skärning',
    'indragning eller infångning',
    'insnärjning',
    'friktion eller nötning',
    'kollision',
    'injektion',
    'avklippning',
    'halkning, snubbling och fall',
    'genomborrning eller stickning',
    'kvävning'
  ];
  public electrical = [
    'brännskada',
    'kemiska effekter',
    'effekter på medicinska implantat',
    'dödsfall på grund av elektrisk stöt',
    'fall, omkullkastning',
    'brand',
    'utslungning av smälta partiklar',
    'chock'
  ];
  public heat = [
    'brännskada',
    'uttorkning',
    'obehag',
    'förfrysning',
    'skador av strålning från värmekällor',
    'skållning'
  ];
  public noise = [
    'obehag',
    'sänkt medvetandenivå',
    'förlust av balans',
    'permanent hörselnedsättning',
    'stress',
    'tinnitus',
    'trötthet',
    'övriga risker (t.ex. mekaniska, elektriska) till följd av störning av muntliga meddelanden eller akustiska signaler'
  ];
  public vibration = [
    'obehag',
    'ländryggsbesvär',
    'neurologisk skada',
    'skelett- och ledskada',
    'ryggradsskada',
    'kärlskada'
  ];
  public radiation = [
    'brännskada',
    'skada på ögon och hud',
    'effekter på reproduktionsförmågan',
    'mutation',
    'huvudvärk, sömnproblem etc.'
  ];
  public substances = [
    'andningssvårigheter, kvävning',
    'cancer',
    'korrosion',
    'effekter på reproduktionsförmågan',
    'explosion',
    'brand',
    'infektion',
    'mutation',
    'förgiftning',
    'överkänslighet'
  ];
  public ergonomical = [
    'obehag',
    'uttröttning',
    'muskel- och skelettproblem',
    'stress',
    'övrigt (t.ex. mekaniskt, elektriskt) till följd av mänskliga misstag'
  ];
  public environmental = [
    'brännskada',
    'lättare sjukdom',
    'halkning, fall',
    'kvävning',
    'eventuella andra risker som en följd av den effekt som orsakas av riskkällor hos maskinen eller maskinens delar'
  ];
  public combinations = [
    'T.ex. uttorkning, sänkt medvetandenivå, värmeslag'
  ];
  constructor() { }

  ngOnInit() {
  }

}
