import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ChasseurService} from "../../../services/chasseur.service";
import {PiloteService} from "../../../services/pilote.service";
import {IChasseur} from "../../../interfaces/ichasseur";
import {IPilote} from "../../../interfaces/ipilote";
import {ConfirmDialogComponent} from "../../confirm-dialog-component/confirm-dialog-component.component";
import {MatDialog} from "@angular/material/dialog";
import {filter, switchMap} from "rxjs";

@Component({
  selector: 'app-desaffecter-chasseurs-form',
  templateUrl: './desaffecter-chasseurs-form.component.html',
  styleUrls: ['./desaffecter-chasseurs-form.component.scss']
})
export class DesaffecterChasseursFormComponent {
  displayedColumns: string[] = ['nom', 'type', 'piloteAffecte', 'actions'];
  pilotes: IPilote[] = [];

  constructor(private piloteService: PiloteService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.piloteService.getPilotesHasChasseur().subscribe(pilotes =>{
      this.pilotes = pilotes;
      console.log(pilotes)
    }, error => {
      alert(error.message)
    });
    console.log(this.pilotes)
  }

  handleDesaffect(id: string) {
    const message: any = "Êtes vous certain de vouloir désaffecter ce chasseur ?";
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message },
      height: '200px',
      width: '400px',
      position: {
        left: 'calc(25% + 200px)'
      }
    })


    dialogRef.afterClosed().pipe(
      filter(result => !!result),
      switchMap(() => this.piloteService.desaffect(id)),
    ).subscribe(() => {
      const index = this.pilotes.findIndex(p => p.id === id);
      if (index !== -1) {
        this.pilotes.splice(index, 1);
      }
    }, error => {
      alert(error.message);
    });

  }
}
