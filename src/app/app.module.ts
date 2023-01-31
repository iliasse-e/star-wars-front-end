import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { PageRebelleComponent } from './views/page-rebelle/page-rebelle.component';
import { PageInscriptionFormationComponent } from './views/page-inscription-formation/page-inscription-formation.component';
import { PageCloturerFormationComponent } from './views/page-cloturer-formation/page-cloturer-formation.component';
import { DesktopComponent } from './views/desktop/desktop.component';
import { PageChasseurComponent } from './views/page-chasseur/page-chasseur.component';
import { PageNouveauChasseurComponent } from './views/page-nouveau-chasseur/page-nouveau-chasseur.component';
import { PageAffectationChasseurComponent } from './views/page-affectation-chasseur/page-affectation-chasseur.component';
import { PageDesaffecterChasseurComponent } from './views/page-desaffecter-chasseur/page-desaffecter-chasseur.component';
import { PagePiloteComponent } from './views/page-pilote/page-pilote.component';
import { PageRecherchePiloteComponent } from './views/page-recherche-pilote/page-recherche-pilote.component';
import { PageCreationMissionComponent } from './views/page-creation-mission/page-creation-mission.component';
import { PageClotureMissionComponent } from './views/page-cloture-mission/page-cloture-mission.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewRebelleFormComponent } from './components/forms/new-rebelle-form/new-rebelle-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NewRebelleFormComponent,
    PageRebelleComponent,
    PageInscriptionFormationComponent,
    PageCloturerFormationComponent,
    DesktopComponent,
    PageChasseurComponent,
    PageNouveauChasseurComponent,
    PageAffectationChasseurComponent,
    PageDesaffecterChasseurComponent,
    PagePiloteComponent,
    PageRecherchePiloteComponent,
    PageCreationMissionComponent,
    PageClotureMissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

