import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalsIntroComponent } from './signals-intro/signals-intro.component';
import { EffetcsComponent } from './effetcs/effetcs.component';
import { EffectsDemoComponent } from './effects-demo/effects-demo.component';
import { ElementoListComponent } from './elemento-list/elemento-list.component';
import { ElementoDetathesComponent } from './elemento-detathes/elemento-detathes.component';
import { ComputedSignalComponent } from './computed-signal/computed-signal.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { ItemCounterComponent } from './item-counter/item-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    SignalsIntroComponent,
    EffetcsComponent,
    EffectsDemoComponent,
    ElementoListComponent,
    ElementoDetathesComponent,
    ComputedSignalComponent,
    ClickCounterComponent,
    ItemCounterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
