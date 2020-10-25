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
import { EducationlevelComponent } from './educationlevel/educationlevel.component';
import { SpeedComponent } from './speed/speed.component';
import { AvailablespaceComponent } from './availablespace/availablespace.component';
import { AwarenessofhazardComponent } from './awarenessofhazard/awarenessofhazard.component';
import { ComplexityComponent } from './complexity/complexity.component';
import { SeverityComponent } from './severity/severity.component';


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
  {path: 'likelyhoodhazardousevent', component: LikelyhoodhazardouseventComponent},
  {path: 'educationlevel', component: EducationlevelComponent},
  {path: 'speed', component: SpeedComponent},
  {path: 'availablespace', component: AvailablespaceComponent},
  {path: 'awarnessofhazard', component: AwarenessofhazardComponent},
  {path: 'complexity', component: ComplexityComponent},
  {path: 'severity', component: SeverityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FrequencydurationComponent, FrequencyComponent,
FrequencyvalueComponent, FrequencyvaluetwoComponent, NorisksituationComponent,
DoesriskeventexistComponent, TechnicaloriginComponent, HumanoriginComponent,
FillintechnicaloriginComponent, FillinhumanoriginComponent, LikelyhoodhazardouseventComponent,
EducationlevelComponent, SpeedComponent, AvailablespaceComponent, AwarenessofhazardComponent,
ComplexityComponent, SeverityComponent];
