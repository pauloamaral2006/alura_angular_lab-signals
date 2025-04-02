import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalsIntroComponent } from './signals-intro/signals-intro.component';
import { EffetcsComponent } from './effetcs/effetcs.component';
import { EffectsDemoComponent } from './effects-demo/effects-demo.component';
import { ElementoListComponent } from './elemento-list/elemento-list.component';
import { ElementoDetathesComponent } from './elemento-detathes/elemento-detathes.component';

@NgModule({
  declarations: [
    AppComponent,
    SignalsIntroComponent,
    EffetcsComponent,
    EffectsDemoComponent,
    ElementoListComponent,
    ElementoDetathesComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
