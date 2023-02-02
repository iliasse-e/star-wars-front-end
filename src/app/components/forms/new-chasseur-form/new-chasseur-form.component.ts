import {Component, OnInit} from '@angular/core';
import {IChasseur} from "../../../interfaces/ichasseur";
import {ChasseurService} from "../../../services/chasseur.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ChasseurType} from "../../../enums/chasseur-type";
import {ChasseurEtat} from "../../../enums/chasseur-etat";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-new-chasseur-form',
  templateUrl: './new-chasseur-form.component.html',
  styleUrls: ['./new-chasseur-form.component.scss']
})
export class NewChasseurFormComponent implements OnInit {
  private newChasseur!: IChasseur;
  protected form!: FormGroup;
  protected types: any[] = Object.values(ChasseurType).filter(value => typeof value !== 'number');
  protected etats: any[] = Object.values(ChasseurEtat).filter(value => typeof value !== 'number');

  constructor(private chasseurService: ChasseurService, private snackbar: MatSnackBar) {  }

  ngOnInit(): void {
    this.form = new FormGroup<any>({
      chasseur: new FormGroup<any>({
        name: new FormControl(''),
        typeChasseur: new FormControl(ChasseurType.XWING),
        etatChasseur: new FormControl(ChasseurEtat.OPERATIONNEL)
      })
    })
  }

  public submit() {
    this.newChasseur = this.form.get("chasseur")?.value;
    this.chasseurService.saveChasseur(this.newChasseur).subscribe(chasseur=> {
      this.snackbar.open("Nouveau chasseur "+this.newChasseur.name +" enregistré !", '', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      })
    }, error => {
      this.snackbar.open("Chasseur non enregistré !", '', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      })
    })
  }
}
