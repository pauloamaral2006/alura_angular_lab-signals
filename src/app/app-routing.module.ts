import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsIntroComponent } from './signals-intro/signals-intro.component';
import { EffetcsComponent } from './effetcs/effetcs.component';
import { EffectsDemoComponent } from './effects-demo/effects-demo.component';
import { ElementoListComponent } from './elemento-list/elemento-list.component';
import { ElementoDetathesComponent } from './elemento-detathes/elemento-detathes.component';

const routes: Routes = [
  { path: '', redirectTo: 'elements', pathMatch: 'full' },
  { path: 'intro', component: SignalsIntroComponent },
  { path: 'effects', component: EffetcsComponent },
  { path: 'effects-demo', component: EffectsDemoComponent },
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
