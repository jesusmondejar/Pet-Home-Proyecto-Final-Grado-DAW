import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styles: `.hero {
    position: relative;
    width: 100%;
    height: 70vh; /* Alto de la sección héroe */
    background: url('/assets/img/pexels-cdomingues10-731022.jpg') no-repeat center center;
    background-size: cover;
  }
  
  .hero .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4); /* capa semitransparente */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 1rem;
  }
  
  .hero .overlay h1 {
    color: #fff;
    font-size: 3rem;
    margin-bottom: 1.5rem;
    text-shadow: 0 2px 8px rgba(0,0,0,0.6);
  }
  
  .hero .overlay .buttons {
    display: flex;
    gap: 1rem;
  }
  
  .hero .overlay .btn {
    padding: 0.8rem 2rem;
    font-size: 1.1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .hero .overlay .btn.adopt {
    background-color: #fc713e;
    color: #fff;
  }
  
  .hero .overlay .btn.adopt:hover {
    background-color: #ff5722;
  }
  
  .hero .overlay .btn.more {
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;
  }
  
  .hero .overlay .btn.more:hover {
    background-color: rgba(255,255,255,0.2);
  }
  `
})
export class InicioComponent {

}
