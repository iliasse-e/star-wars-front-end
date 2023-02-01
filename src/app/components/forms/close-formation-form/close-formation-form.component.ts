import {Component, OnInit} from '@angular/core';
import {RebelleService} from "../../../services/rebelle.service";
import {Irebelle} from "../../../interfaces/irebelle";

@Component({
  selector: 'app-close-formation-form',
  templateUrl: './close-formation-form.component.html',
  styleUrls: ['./close-formation-form.component.scss']
})
export class CloseFormationFormComponent implements OnInit {
  public rebelles: Irebelle[] = [];

  constructor(private rebelleService: RebelleService) {}

  ngOnInit(): void {
    this.rebelleService.getRebelles().subscribe(rebelles => {
      this.rebelles = rebelles;
    });
  }

  handleCloseFormation(rebelle: Irebelle) {
    // methode à écrire qui devra mettre fin à la formation du rebelle et le faire disparaitre de la vue
  }
}
