import {Component, OnInit} from '@angular/core';
import {IPilote} from "../../../interfaces/ipilote";
import {PiloteService} from "../../../services/pilote.service";

@Component({
  selector: 'app-search-pilote-form',
  templateUrl: './search-pilote-form.component.html',
  styleUrls: ['./search-pilote-form.component.scss']
})
export class SearchPiloteFormComponent implements OnInit {
  pilotes!: IPilote[];
  selectedPilote!: IPilote;
  filteredPilotes!: IPilote[];
  searchName!: string;

  constructor(private piloteService: PiloteService) { }

  ngOnInit() {
    this.getPilotes();
  }

  displayChasseurInfo(pilote: IPilote) {
    this.selectedPilote = pilote;
  }

  getPilotes() {
    this.piloteService.getPilotes().subscribe(pilotes => {
      this.pilotes = pilotes;
      this.filteredPilotes = pilotes;
      console.log(pilotes)
    });
  }

  searchPilotesByName(name: string) {
    this.filteredPilotes = this.pilotes.filter(pilote => pilote.nom.toLowerCase().startsWith(name.toLowerCase()));
    console.log(name, this.filteredPilotes);
  }
}
