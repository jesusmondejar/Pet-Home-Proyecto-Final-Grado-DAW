import { Component } from '@angular/core';

@Component({
  selector: 'app-page404',
  imports: [],
  templateUrl: './page404.component.html',
  styles: ` 
   body, html {
      height: 100%;
      margin: 0;
    }

    .full-height-center {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 1rem;
    }

    .error-code {
      font-size: 8rem;
      font-weight: 900;
      color: #fc713e;
    }

    .error-message {
      font-size: 1.5rem;
      color: #333;
    }

    .btn-orange {
      background-color: #fc713e;
      color: white;
      border: none;
    }

    .btn-orange:hover {
      background-color: #e86130;
    }`
})
export class Page404Component {

}
