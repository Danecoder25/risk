import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { PhasesComponent } from './phases/phases.component';
import { RisksourceComponent } from './risksource/risksource.component';
import { RiskareaComponent } from './riskarea/riskarea.component';
import { RisksituationComponent } from './risksituation/risksituation.component';
import { OperatorComponent } from './operator/operator.component';
import { FrequencydurationComponent } from './frequencyduration/frequencyduration.component';
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


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    PhasesComponent,
    RisksourceComponent,
    RiskareaComponent,
    RisksituationComponent,
    OperatorComponent,
    routingComponents,
    FrequencydurationComponent,
    FrequencyComponent,
    FrequencyvalueComponent,
    FrequencyvaluetwoComponent,
    NorisksituationComponent,
    DoesriskeventexistComponent,
    TechnicaloriginComponent,
    HumanoriginComponent,
    FillintechnicaloriginComponent,
    FillinhumanoriginComponent,
    LikelyhoodhazardouseventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
