import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsIntroComponent } from './signals-intro/signals-intro.component';
import { EffetcsComponent } from './effetcs/effetcs.component';
import { EffectsDemoComponent } from './effects-demo/effects-demo.component';
import { ElementoListComponent } from './elemento-list/elemento-list.component';
import { ElementoDetathesComponent } from './elemento-detathes/elemento-detathes.component';
import { ComputedSignalComponent } from './computed-signal/computed-signal.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { ItemCounterComponent } from './item-counter/item-counter.component';

const routes: Routes = [
  { path: '', redirectTo: 'elements', pathMatch: 'full' },
  { path: 'intro', component: SignalsIntroComponent },
  { path: 'effects', component: EffetcsComponent },
  { path: 'effects-demo', component: EffectsDemoComponent },
  { path: 'computed-signal', component: ComputedSignalComponent },
  { path: 'click-counter', component: ClickCounterComponent },
  { path: 'item-counter', component: ItemCounterComponent },
  {
    path: 'elements',
    children: [
      { path: '', component: ElementoListComponent, outlet: 'list' },
      { path: '', component: ElementoDetathesComponent, outlet: 'details' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
