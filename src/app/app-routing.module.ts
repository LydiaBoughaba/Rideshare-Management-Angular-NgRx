import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifierOffreComponent } from './components/offres/modifier-offre/modifier-offre.component';
import { NouvelleOffreComponent } from './components/offres/nouvelle-offre/nouvelle-offre.component';
import { OffresComponent } from './components/offres/offres.component';

const routes: Routes = [
  {path: "offres", component:OffresComponent},
  {path: "newoffre", component:NouvelleOffreComponent},
  {path: "editoffre/:id", component:ModifierOffreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
