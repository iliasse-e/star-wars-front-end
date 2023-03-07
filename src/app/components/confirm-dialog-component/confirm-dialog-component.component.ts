import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <div class="dialog mat-dialog-centered">
      <h1 mat-dialog-title>{{title}}</h1>
      <div mat-dialog-content>
        <p>{{message}}</p>
      </div>
      <div mat-dialog-actions>
        <button mat-button (click)="onNoClick()">Non</button>
        <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Oui</button>
      </div>
    </div>
  `,
  styleUrls: ['./confirm-dialog-component.component.scss'],
  host: {
    'class': 'mat-dialog-container'
  }
})
export class ConfirmDialogComponent implements OnInit{
  @Input() public message!:string;
  @Input() public title!: any;

  ngOnInit() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      'top': '0',
      left: '0'
    };
  }

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) {
    this.message = data.message;
    this.title = data.title;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
