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
  filteredPilotes!: IPilote[];
  searchName!: string;

  constructor(private piloteService: PiloteService) { }

  ngOnInit() {
    this.getPilotes();
  }

  getPilotes() {
    this.piloteService.getPilotes().subscribe(pilotes => {
      this.pilotes = pilotes;
      this.filteredPilotes = pilotes;
    });
  }

  getPilotesByName(name: string) {
    /*this.piloteService.getPilotesByName(name).subscribe(pilotes => {
      this.pilotes = pilotes;
      this.filteredPilotes = pilotes;
    }, error => {
        console.error(this.searchName+" non trouvé");
      }
    );*/
  }
}
