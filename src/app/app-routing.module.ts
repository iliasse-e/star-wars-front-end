import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopComponent } from './views/desktop/desktop.component';
import { PageAffectationChasseurComponent } from './views/page-affectation-chasseur/page-affectation-chasseur.component';
import { PageChasseurComponent } from './views/page-chasseur/page-chasseur.component';
import { PageClotureMissionComponent } from './views/page-cloture-mission/page-cloture-mission.component';
import { PageCloturerFormationComponent } from './views/page-cloturer-formation/page-cloturer-formation.component';
import { PageCreationMissionComponent } from './views/page-creation-mission/page-creation-mission.component';
import { PageDesaffecterChasseurComponent } from './views/page-desaffecter-chasseur/page-desaffecter-chasseur.component';
import { PageInscriptionFormationComponent } from './views/page-inscription-formation/page-inscription-formation.component';
import { PageNouveauChasseurComponent } from './views/page-nouveau-chasseur/page-nouveau-chasseur.component';
import { PagePiloteComponent } from './views/page-pilote/page-pilote.component';
import { PageRebelleComponent } from './views/page-rebelle/page-rebelle.component';
import { PageRecherchePiloteComponent } from './views/page-recherche-pilote/page-recherche-pilote.component';

const routes: Routes = [
  {path: "", component: DesktopComponent},
  {path: "rebelle", component: PageRebelleComponent},
  {path: "rebelle/inscription", component: PageInscriptionFormationComponent},
  {path: "rebelle/cloturer-formation", component: PageCloturerFormationComponent},

  {path: "pilote", component: PagePiloteComponent},
  {path: "pilote/recherche", component: PageRecherchePiloteComponent},
  {path: "pilote/creation-mission", component: PageCreationMissionComponent},
  {path: "pilote/cloture-mission", component: PageClotureMissionComponent},
  
  {path: "chasseur", component: PageChasseurComponent}, 
  {path: "chasseur/nouveau", component: PageNouveauChasseurComponent},
  {path: "chasseur/affectation", component: PageAffectationChasseurComponent},
  {path: "chasseur/desaffectation", component: PageDesaffecterChasseurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
