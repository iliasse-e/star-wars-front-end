import {Component, OnInit} from '@angular/core';
import {IMission} from "../../../interfaces/imission";
import {MissionService} from "../../../services/mission.service";
import { MatDialog } from '@angular/material/dialog';
import {ConfirmDialogComponent} from "../../confirm-dialog-component/confirm-dialog-component.component";

@Component({
  selector: 'app-close-mission-form',
  templateUrl: './close-mission-form.component.html',
  styleUrls: ['./close-mission-form.component.scss']
})
export class CloseMissionFormComponent implements OnInit {
  missions!: IMission[];

  constructor(private missionService: MissionService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getMissions();
  }

  getMissions() {
    this.missionService.getMissions().subscribe(missions => {
      this.missions = missions;
    });
  }

  closeMission(mission: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: `Êtes-vous sûr de vouloir clôturer la mission "${mission.nom}" ?`
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.missionService.deleteMission(mission.id).subscribe(() => {
          this.getMissions();
        });
      }
    });
  }
}
