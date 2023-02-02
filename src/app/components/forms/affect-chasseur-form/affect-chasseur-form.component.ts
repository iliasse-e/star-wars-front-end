import {Component, OnInit} from '@angular/core';
import {IPilote} from "../../../interfaces/ipilote";
import {IChasseur} from "../../../interfaces/ichasseur";
import {PiloteService} from "../../../services/pilote.service";
import {ChasseurService} from "../../../services/chasseur.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-affect-chasseur-form',
  templateUrl: './affect-chasseur-form.component.html',
  styleUrls: ['./affect-chasseur-form.component.scss']
})
export class AffectChasseurFormComponent implements OnInit {
  public chasseurs!: IChasseur[];
  public pilotes!: IPilote[];
  public selectedChasseur!: IChasseur;
  public selectedPilote!: IPilote;

  constructor(private chasseurService: ChasseurService, private piloteService: PiloteService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.chasseurService.getChasseurs().subscribe(chasseurs => {
      this.chasseurs = chasseurs;
    });
    this.piloteService.getPilotes().subscribe(pilotes => {
      this.pilotes = pilotes;
    });
  }

  public onChasseurSelected(chasseur: IChasseur): void {
    this.selectedChasseur = chasseur;
  }

  public onPiloteSelected(pilote: IPilote): void {
    this.selectedPilote = pilote;
  }

  public affecter(): void {
    this.piloteService.affect(this.selectedPilote.id, this.selectedChasseur.id).subscribe(()=> {
      this.snackbar.open(this.selectedChasseur.name+" vient d'être attribué a "+this.selectedPilote.prenom, '', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    }, error => {
      this.snackbar.open("Affectation échouée", '', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    })
  }
}
