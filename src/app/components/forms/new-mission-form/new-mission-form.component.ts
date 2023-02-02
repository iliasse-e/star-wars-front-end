import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
//import {Race} from "../../../enums/race";
//import {Irebelle} from "../../../interfaces/irebelle";
//import {RebelleService} from "../../../services/rebelle.service";
import {IMission} from "../../../interfaces/imission";
import {MissionService} from "../../../services/mission.service";
import {IPilote} from "../../../interfaces/ipilote";
import {PiloteService} from "../../../services/pilote.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-new-mission-form',
  templateUrl: './new-mission-form.component.html',
  styleUrls: ['./new-mission-form.component.scss']
})
export class NewMissionFormComponent implements OnInit {
  protected pilotes!: IPilote[];
  public form!: FormGroup;
  private newMission!: IMission;
  // ajoutez un tableau pour stocker les identificateurs des pilotes sélectionnés
  selectedPiloteIds: string[] = [];

// ajoutez un événement de changement sur les checkboxes
  public onPiloteSelectionChanged(event: any, piloteId: string) {
    if (event.target.checked) {
      this.selectedPiloteIds.push(piloteId);
    } else {
      const index = this.selectedPiloteIds.indexOf(piloteId);
      this.selectedPiloteIds.splice(index, 1);
    }
  }

  constructor(private missionService: MissionService, private piloteService: PiloteService, private snackbar: MatSnackBar) {}

  public submit(): void {
    this.newMission = this.form.get('mission')?.value;
    this.newMission.pilotes = this.pilotes.filter(pilote => this.selectedPiloteIds.includes(pilote.id));
    console.log(this.newMission)
    this.missionService.saveMission(this.newMission).subscribe(mission => {
      this.snackbar.open("La mission "+ this.newMission.nom +" vient d'être lancée", '', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    }, error => {
      this.snackbar.open("Une erreur s'est produite lors de la création de la mission", '', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    });
  }

  ngOnInit(): void {
    this.piloteService.getPilotes().subscribe(pilotes => {
      this.pilotes = pilotes;
    });
    this.form = new FormGroup<any>({
      mission: new FormGroup<any>({
        nom: new FormControl(""),
        pilotes: new FormControl([]),
      })
    });

  }
}
