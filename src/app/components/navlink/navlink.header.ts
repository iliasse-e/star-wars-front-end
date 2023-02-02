import { Component, Input } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";

@Component({
  selector: 'app-nav-link-header',
  template: `
    <mat-toolbar>
      <button mat-icon-button [routerLink]="backToLink">
        <mat-icon>arrow_back</mat-icon>
      </button>
      <h2 class="title">{{ title }}</h2>
    </mat-toolbar>
  `,
  styleUrls: ['./navlink.header.scss']
})
export class NavlinkComponentHeader {
  @Input() title!: string;
  @Input() backToLink!: string;
}
