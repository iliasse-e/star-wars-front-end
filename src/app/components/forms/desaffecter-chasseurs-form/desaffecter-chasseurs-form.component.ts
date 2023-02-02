import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ChasseurService} from "../../../services/chasseur.service";
import {PiloteService} from "../../../services/pilote.service";
import {IChasseur} from "../../../interfaces/ichasseur";

@Component({
  selector: 'app-desaffecter-chasseurs-form',
  templateUrl: './desaffecter-chasseurs-form.component.html',
  styleUrls: ['./desaffecter-chasseurs-form.component.scss']
})
export class DesaffecterChasseursFormComponent {
  displayedColumns: string[] = ['nom', 'type', 'piloteAffecte', 'actions'];
  dataSource!: IChasseur[] | any;

  constructor(private chasseurService: ChasseurService) { }

  ngOnInit(): void {
    this.dataSource = this.chasseurService.getChasseursAffected();
  }

  handleDesaffect(id: string) {
    this.chasseurService.desaffect(id);
    this.dataSource = this.chasseurService.getChasseursAffected();
  }
}
