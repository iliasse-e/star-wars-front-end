import {Component, Inject, OnInit} from '@angular/core';
import {IMission} from "../../../interfaces/imission";
import {MissionService} from "../../../services/mission.service";
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {NumberHourDialogComponent} from "../../confirm-dialog-component/number-hour-dialog.component";
import {RecapMissionDialogComponent} from "../../confirm-dialog-component/recap-mission-dialog.component";

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
    this.missionService.getMissionsInProgress().subscribe(missions => {
      this.missions = missions;
    });
  }

  closeMission(mission: any) {
    const dialogRef = this.dialog.open(NumberHourDialogComponent, {
      height: '200px',
      width: '400px',
      position: {
        left: 'calc(25% + 200px)'
      }
    });

    dialogRef.afterClosed().subscribe((hours: number) => {
      if (hours) {
        this.missionService.endMission(mission.id, hours).subscribe(data => {
          console.log(data);
          this.dialog.open(RecapMissionDialogComponent, {
            height: '200px',
            width: '400px',
            position: {
              left: 'calc(25% + 200px)'
            },
            data: data
          })
          this.getMissions();
        });
      }
    });
  }
}
