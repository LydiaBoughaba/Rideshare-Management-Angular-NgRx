import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffresComponent } from './components/offres/offres.component';
import { NavBarComponent } from './components/offres/nav-bar/nav-bar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { offresReducer } from './ngrx/offres.reducer';
import { offresEffects } from './ngrx/offres.effects';
import { ListComponent } from './components/offres/list/list.component';
import { ItemComponent } from './components/offres/list/item/item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouvelleOffreComponent } from './components/offres/nouvelle-offre/nouvelle-offre.component';
import { ModifierOffreComponent } from './components/offres/modifier-offre/modifier-offre.component';

@NgModule({
  declarations: [
    AppComponent,
    OffresComponent,
    NavBarComponent,
    ListComponent,
    ItemComponent,
    NouvelleOffreComponent,
    ModifierOffreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({catalogState: offresReducer}),
    EffectsModule.forRoot([offresEffects]),
    StoreDevtoolsModule.instrument(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
