import {Component, OnInit} from '@angular/core';
import {PiloteService} from "../../../services/pilote.service";
import {IPilote} from "../../../interfaces/ipilote";
import {ConfirmDialogComponent} from "../../confirm-dialog-component/confirm-dialog-component.component";
import {MatDialog} from "@angular/material/dialog";
import {filter, switchMap} from "rxjs";

@Component({
  selector: 'app-close-formation-form',
  templateUrl: './close-formation-form.component.html',
  styleUrls: ['./close-formation-form.component.scss']
})
export class CloseFormationFormComponent implements OnInit {
  public rebelles: IPilote[] = [];

  constructor(private piloteService: PiloteService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getPilotes();
  }

  public getPilotes() {
    this.piloteService.getPilotesEnFormation().subscribe(rebelles => {
      this.rebelles = rebelles;
    });
  }

  handleCloseFormation(rebelle: IPilote) {
    const message: string = "Êtes vous certain de fermer la formation du pilote ?";
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message },
      height: '200px',
      width: '400px',
      position: {
        left: 'calc(25% + 200px)'
      }
    })

    dialogRef.afterClosed().pipe(
      filter((confirmation: any) => confirmation && rebelle.id !== undefined),
      switchMap(() => this.piloteService.endFormation(rebelle.id))
    ).subscribe(() => {
      this.getPilotes();
    });
  }
}
