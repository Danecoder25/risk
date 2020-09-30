import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { PhasesComponent } from './phases/phases.component';
import { RisksourceComponent } from './risksource/risksource.component';
import { RiskareaComponent } from './riskarea/riskarea.component';
import { RisksituationComponent } from './risksituation/risksituation.component';
import { OperatorComponent } from './operator/operator.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    PhasesComponent,
    RisksourceComponent,
    RiskareaComponent,
    RisksituationComponent,
    OperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
