import { FrequencydurationComponent } from './frequencyduration/frequencyduration.component';
import { RisksituationComponent } from './risksituation/risksituation.component';
import { PhasesComponent } from './phases/phases.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FrequencyComponent } from './frequency/frequency.component';
import { FrequencyvalueComponent } from './frequencyvalue/frequencyvalue.component';
import { FrequencyvaluetwoComponent } from './frequencyvaluetwo/frequencyvaluetwo.component';
import { NorisksituationComponent } from './norisksituation/norisksituation.component';
import { DoesriskeventexistComponent } from './doesriskeventexist/doesriskeventexist.component';
import { TechnicaloriginComponent } from './technicalorigin/technicalorigin.component';
import { HumanoriginComponent } from './humanorigin/humanorigin.component';
import { FillintechnicaloriginComponent } from './fillintechnicalorigin/fillintechnicalorigin.component';
import { FillinhumanoriginComponent } from './fillinhumanorigin/fillinhumanorigin.component';
import { LikelyhoodhazardouseventComponent } from './likelyhoodhazardousevent/likelyhoodhazardousevent.component';


const routes: Routes = [
  {path: 'frequencyduration', component: FrequencydurationComponent},
  {path: 'frequency', component: FrequencyComponent},
  {path: 'frequencyvalue', component: FrequencyvalueComponent},
  {path: 'frequencyvaluetwo', component: FrequencyvaluetwoComponent},
  {path: 'norisksituation', component: NorisksituationComponent},
  {path: 'doesriskeventexist', component: DoesriskeventexistComponent},
  {path: 'technicalorigin', component: TechnicaloriginComponent},
  {path: 'humanorigin', component: HumanoriginComponent},
  {path: 'fillintechnicalorigin', component: FillintechnicaloriginComponent},
  {path: 'fillinhumanorigin', component: FillinhumanoriginComponent},
  {path: 'likelyhoodhazardousevent', component: LikelyhoodhazardouseventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FrequencydurationComponent, FrequencyComponent,
FrequencyvalueComponent, FrequencyvaluetwoComponent, NorisksituationComponent,
DoesriskeventexistComponent, TechnicaloriginComponent, HumanoriginComponent,
FillintechnicaloriginComponent, FillinhumanoriginComponent, LikelyhoodhazardouseventComponent];
