import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeadComponent } from "./head/head.component";


import { FootComponent } from "./foot/foot.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeadComponent, FootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PetHome';
}
