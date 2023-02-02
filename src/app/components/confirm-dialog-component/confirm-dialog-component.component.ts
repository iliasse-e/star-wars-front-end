import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h1 mat-dialog-title>Confirmation</h1>
    <div mat-dialog-content>
      <p>Voulez-vous vraiment clôturer cette mission ?</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Non</button>
      <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Oui</button>
    </div>
  `,
})
export class ConfirmDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
