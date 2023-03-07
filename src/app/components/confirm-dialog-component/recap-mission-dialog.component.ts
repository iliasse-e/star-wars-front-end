import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {IMission} from "../../interfaces/imission";

@Component({
  selector: 'dialog-data-example-dialog',
  template: `
      <h1 mat-dialog-title>Récapitulatif de la mission </h1>
    <div mat-dialog-content>
        <p>
          Nom : {{data.nom}}
        </p>
        <p>
          Durée : {{data.nbHeureMission}} heures
        </p>
      Pilotes affectés :
        <ul *ngFor="let pilote of data.pilotes">
          <li>
            {{pilote.nom}}
          </li>
        </ul>
      <button mat-button (click)="close()">Annuler</button>
    </div>
  `,
  styleUrls: ['./confirm-dialog-component.component.scss']
})
export class RecapMissionDialogComponent implements OnInit {
  dialogRef: MatDialogRef<RecapMissionDialogComponent>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IMission,
    dialogRef: MatDialogRef<RecapMissionDialogComponent>
  ) {
    this.dialogRef = dialogRef;
  }

  ngOnInit(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      'top': '0',
      left: '0'
    };
  }

  close() {
    this.dialogRef.close();
  }
}
