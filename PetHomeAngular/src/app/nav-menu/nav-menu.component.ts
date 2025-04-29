import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-menu.component.html',

  styles: `* {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    min-height: 200vh;
    font-size: 0;
    font-family: Helvetica, Verdana, sans-serif;
  }
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 16px 20px 30px 20px;
    display: flex;
    align-items: center;
    transition: 0.3s ease-out;
    backdrop-filter: blur(8px) brightness(1.2);
    -webkit-backdrop-filter: blur(8px) brightness(1.2);
    text-shadow: 0 0 5px rgba(0,0,0,0.5);
    color: white;
    font-size: 16px;
    &.mask {
      
      mask-image: linear-gradient(black 70%, transparent);
      -webkit-mask-image: linear-gradient(black 70%, transparent);
    }
    
  
    @media (min-width: 640px) {
      padding: 16px 50px 30px 50px;
    }
  }
  nav.is-hidden {
    transform: translateY(-100%);
  }
  a {
    color: inherit;
    text-decoration: none;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  .list {
    list-style-type: none;
    margin-left: auto;
    display: none;
    @media (min-width: 640px) {
      display: flex;
    }
    li {
      margin-left: 20px;
    }
  }
  .search {
    display: inline-block;
    padding: 0;
    font-size: 0;
    background: none;
    border: none;
    margin-left: auto;
    filter: drop-shadow(0 0 5px rgba(0,0,0,.5));
    @media (min-width: 640px) {
      margin-left: 20px;
    }
    
    &::before {
      content: '';
      display: inline-block;
      width: 2rem;
      height: 2rem;
      background: center/1.3rem 1.3rem no-repeat url("data:image/svg+xml, %3Csvg%20xmlns=%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox=%270%200%2015.17%2014.81%27%20width=%2715.17%27%20height=%2714.81%27%3E%3Cpath%20d=%27M6,.67A5.34,5.34,0,1,1,.67,6,5.33,5.33,0,0,1,6,.67ZM9.86,9.58l4.85,4.75Z%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-width=%271.33%27%2F%3E%3C%2Fsvg%3E");
    }
  }
  .menu {
    display: inline-block;
    padding: 0;
    font-size: 0;
    background: none;
    border:  none;
    margin-left: 20px;
    filter: drop-shadow(0 0 5px rgba(0,0,0,.5));
    &::before {
      content: url("data:image/svg+xml, %3Csvg%20xmlns=%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox=%270%200%2024.8%2018.92%27%20width=%2724.8%27%20height=%2718.92%27%3E%3Cpath%20d=%27M23.8,9.46H1m22.8,8.46H1M23.8,1H1%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%20stroke-width=%272%27%2F%3E%3C%2Fsvg%3E")
    }
    @media (min-width: 640px) {
      display: none;
    }
  }
  img {
    width: 100%;
    min-height: 200vh;
    object-fit: cover;
=======
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
