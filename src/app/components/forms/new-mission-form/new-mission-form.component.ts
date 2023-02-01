import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Race} from "../../../enums/race";
import {Irebelle} from "../../../interfaces/irebelle";
import {RebelleService} from "../../../services/rebelle.service";
import {IMission} from "../../../interfaces/imission";
import {MissionService} from "../../../services/mission.service";
import {IPilote} from "../../../interfaces/ipilote";
import {PiloteService} from "../../../services/pilote.service";

@Component({
  selector: 'app-new-mission-form',
  templateUrl: './new-mission-form.component.html',
  styleUrls: ['./new-mission-form.component.scss']
})
export class NewMissionFormComponent implements OnInit {
  protected pilotes!: IPilote[];
  public form!: FormGroup;
  private newMission!: IMission;

  constructor(private missionService: MissionService, private piloteService: PiloteService) {}

  public submit(): void {
    console.log("submit", this.form.get('mission')?.value);
    this.newMission = this.form.get('mission')?.value;
    console.log(this.form.getRawValue());
    this.missionService.saveMission(this.newMission).subscribe(mission => {
      console.log("Mission "+ this.newMission.nom +" prête à être lancé");
    }, error => {
      console.error("Error mission non sauvegardé : "+error);
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
