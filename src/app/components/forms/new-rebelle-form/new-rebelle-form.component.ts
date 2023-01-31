import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Race} from "../../../enums/race";
import {IRebelle} from "../../../interfaces/IRebelle";

@Component({
  selector: 'app-new-rebelle-form',
  templateUrl: './new-rebelle-form.component.html',
  styleUrls: ['./new-rebelle-form.component.scss']
})
export class NewRebelleFormComponent implements OnInit {
  public form!: FormGroup;
  protected races: any[] = Object.values(Race);
  protected selectedRace!: Race;
  private MAX_AGE: number = 800;
  private MIN_AGE: number = 10;
  private newRebelle: IRebelle = {
    nom:"",
    prenom:"",
    race:"",
    age: 0
  }

  public submit(): void {
    console.log(this.form);
    console.log(this.form.getRawValue());
  };

  ngOnInit(): void {
    this.form = new FormGroup<any>({
      rebelle: new FormGroup<any>({
        nom: new FormControl(""),
        prenom: new FormControl("", Validators.minLength(2)),
        race: new FormControl(""),
        age: new FormControl("", [Validators.min(this.MIN_AGE), Validators.max(this.MAX_AGE), Validators.required])
      })
    });

  }

}
