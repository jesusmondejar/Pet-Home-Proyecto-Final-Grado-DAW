import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-organizacion-card',
  imports: [],
  templateUrl: './organizacion-card.component.html',
  styleUrl: './organizacion-card.component.css'
})
export class OrganizacionCardComponent {
  @Input() org: any
}
