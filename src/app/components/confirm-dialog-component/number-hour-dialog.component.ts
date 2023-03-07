import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h2 mat-dialog-title>Entrer la durée de la mission (heures)</h2>
    <div mat-dialog-content>
      <mat-form-field appearance="fill">
        <mat-label>Heures</mat-label>
        <input matInput type="number" [(ngModel)]="hours">
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="close()">Annuler</button>
      <button mat-button color="primary" (click)="save()">Clôturer la mission</button>
    </div>

  `,
  styleUrls: ['./confirm-dialog-component.component.scss']
})
export class NumberHourDialogComponent {
  hours = 400;

  constructor(private dialogRef: MatDialogRef<NumberHourDialogComponent>) { }

  save() {
    if (Number.isNaN(this.hours)) {this.dialogRef.close()}; // checks if input is NaN
    this.dialogRef.close(this.hours);
  }

  close() {
    this.dialogRef.close();
  }
}
