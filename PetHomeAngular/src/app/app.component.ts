import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FootComponent } from "./foot/foot.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FootComponent, NavMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PetHome';
}
