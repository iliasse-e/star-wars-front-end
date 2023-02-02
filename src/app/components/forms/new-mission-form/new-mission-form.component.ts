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

  constructor(private missionService: MissionService, private piloteService: PiloteService, private snackbar: MatSnackBar) {}

  public submit(): void {
    console.log("submit", this.form.get('mission')?.value);
    this.newMission = this.form.get('mission')?.value;
    console.log(this.form.getRawValue());
    this.missionService.saveMission(this.newMission).subscribe(mission => {
      this.snackbar.open("La mission "+ this.newMission.nom +" vient d'être lancée", '', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    }, error => {
      this.snackbar.open("Error mission non sauvegardé", '', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    })
  };

  ngOnInit(): void {
    this.piloteService.getPilotes().subscribe(pilotes => {
      this.pilotes = pilotes;
    });
    this.form = new FormGroup<any>({
      mission: new FormGroup<any>({
        nom: new FormControl(""),
        pilotes: new FormControl(""),
      })
    });

  }
}
