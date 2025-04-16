import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-menu.component.html',
  styles: `.header__info {
    background-color: var(--pink);
    text-align: end;
  }
  
  .header__info p {
    color: var(--white);
    font-weight: 700;
    padding: 5px 25px 5px 0px;
  }
  
  .phone-number {
    font-weight: 900;
  }
  
  .container-navbar {
    background-color: var(--white);
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
  }
  
  .navbar__logo {
    display: flex;
    align-items: center;
  }
  
  .navbar__logo img {
    height: 60px;
    margin-right: 20px;
  }
  
  .navbar__logo span {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1.5rem;
    color: var(--dark-purple);
  }
  
  .navbar__nav {
    display: flex;
    align-items: center;
  }
  
  .navbar__nav > * {
    margin-left: 40px;
  }
  
  .nav__list {
    display: flex;
    list-style: none;
  }
  
  .nav__link {
    margin-left: 40px;
    font-size: 1.1rem;
    font-weight: 500;
  }
  
  .nav__link a {
    color: var(--dark-purple);
    position: relative;
  }
  
  .nav__link a::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--dark-purple);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  .nav__link:hover a::after {
    opacity: 1;
  }
  
  .link-active a {
    font-weight: 700;
  }
  
  .search__icon img {
    height: 28px;
  }
  
  .navbar__toggle-btn {
    display: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  
  .navbar__mobile-menu {
    display: none;
  }
  
  .header__info {
    overflow: hidden; /* Para ocultar el texto que se desplaza fuera del contenedor */
  }
  
  .header__info p {
    white-space: nowrap; /* Evita el salto de línea dentro del texto */
    animation: moveText 30s linear infinite;
  }
  
  @keyframes moveText {
    0% {
      transform: translateX(
        100%
      ); /* Mueve el texto fuera del contenedor hacia la derecha al inicio */
    }
    100% {
      transform: translateX(
        -100%
      ); /* Mueve el texto fuera del contenedor hacia la izquierda al final */
    }
  }
  
  @media only screen and (max-width: 895px) {
    .nav__list {
      display: none;
    }
  
    .navbar__nav > * {
      margin-left: 20px;
    }
  
    .navbar__toggle-btn {
      margin: 0;
      display: block;
    }
  
    .navbar__toggle-btn img {
      height: 28px;
      margin: 0 10px;
    }
  
    .navbar__mobile-menu {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 130px;
      right: 0;
      background-color: var(--white);
      width: 100%;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
      z-index: 1;
    }
  
    .nav__link-mobile {
      margin-left: 40px;
      font-size: 1.1rem;
      font-weight: 500;
    }
  
    .nav__link-mobile a::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--dark-purple);
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
  
    .nav__link-mobile:hover a::after {
      opacity: 1;
    }
  
    .navbar__mobile-menu .nav__list-mobile {
      list-style: none;
      padding: 20px;
      margin-bottom: 15px;
    }
  
    .nav__link-mobile a {
      color: var(--dark-purple);
      position: relative;
    }
  }
  
  @media only screen and (max-width: 510px) {
    .search__icon img {
      display: none;
    }
  
    .button-saber-mas {
      margin: 0;
    }
  }`
})
export class NavMenuComponent {

}
