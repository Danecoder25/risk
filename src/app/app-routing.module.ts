import { FrequencydurationComponent } from './frequencyduration/frequencyduration.component';
import { RisksituationComponent } from './risksituation/risksituation.component';
import { PhasesComponent } from './phases/phases.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FrequencyComponent } from './frequency/frequency.component';


const routes: Routes = [
  {path: 'frequencyduration', component: FrequencydurationComponent},
  {path: 'frequency', component: FrequencyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FrequencydurationComponent, FrequencyComponent];
