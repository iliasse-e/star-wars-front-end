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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewRebelleFormComponent } from './components/forms/new-rebelle-form/new-rebelle-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NewChasseurFormComponent } from './components/forms/new-chasseur-form/new-chasseur-form.component';
import { NewMissionFormComponent } from './components/forms/new-mission-form/new-mission-form.component';
import { CloseFormationFormComponent } from './components/forms/close-formation-form/close-formation-form.component';
import { DesaffecterChasseursFormComponent } from './components/forms/desaffecter-chasseurs-form/desaffecter-chasseurs-form.component';
import { SearchPiloteFormComponent } from './components/forms/search-pilote-form/search-pilote-form.component';
import {
  CloseMissionFormComponent,
} from './components/forms/close-mission-form/close-mission-form.component';
import { AffectChasseurFormComponent } from './components/forms/affect-chasseur-form/affect-chasseur-form.component';
import { ConfirmDialogComponent } from './components/confirm-dialog-component/confirm-dialog-component.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from "@angular/material/table";
import {NavlinkComponentHeader} from './components/navlink/navlink.header';
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {NumberHourDialogComponent} from "./components/confirm-dialog-component/number-hour-dialog.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {RecapMissionDialogComponent} from "./components/confirm-dialog-component/recap-mission-dialog.component";

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
    PageClotureMissionComponent,
    NewChasseurFormComponent,
    NewMissionFormComponent,
    CloseFormationFormComponent,
    DesaffecterChasseursFormComponent,
    SearchPiloteFormComponent,
    CloseMissionFormComponent,
    AffectChasseurFormComponent,
    ConfirmDialogComponent,
    NavlinkComponentHeader,
    NumberHourDialogComponent,
    RecapMissionDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

