import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-menu.component.html',
  styles: `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  position: fixed;
  z-index: 99;
  width: 100%;
  background: white;
}

nav .wrapper {
  position: relative;
  max-width: 1300px;
  padding: 0 30px;
  height: 70px;
  line-height: 70px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  height: 90%;
  display: flex;
  align-items: center;
}

.logo:hover {
  cursor: pointer;
}

.wrapper .nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 60px;
}

.nav-links li {
  display: flex;
  align-items: center;
  height: 100%;
}

.nav-links li a {
  color: #fc763f;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  padding: 9px 10px;
  border-radius: 5px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link-usuario {
  color: black;
  text-decoration: none;
  font-size: 20px;
  }

.nav-links li a:hover {
  transform: translateY(-3px);
}

.nav-links li a::before {
  content: "";
  position: absolute;
  z-index: -1;
  bottom: 20px;
  left: 0;
  right: 0;
  height: 5px;
  background-color: rgb(250, 158, 125);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.3s ease;
}

.nav-links li a:hover::before {
  transform: scaleY(1);
  background-color: #fc713e;
}

.wrapper .menu-toggle {
  color: black;
  font-size: 20px;
  cursor: pointer;
  display: none;
}

.menu-toggle img {
  width: 30px;
  height: 30px;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.menu-toggle img:hover {
  transform: scale(1.1);
}

nav input {
  display: none;
}

.button,
.button-inicio {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  gap: 15px;
  font-weight: 600;
  font-size: 20px;
  border-radius: 5px;
  height: 60%;
  cursor: pointer;
  transition: 400ms;
  box-sizing: border-box;
}

.button {
  background-color: #fc713e;
  outline: 3px #fc713e solid;
  color: white;
  border: none;
  outline-offset: -3px;
}

.button:hover {
  background-color: transparent;
  color: black;
}

.button-inicio {
  background-color: #f2f2f2;
  border: 3px solid transparent;
  color: #000;
}

.button-inicio:hover {
  background-color: #fff;
  border: 3px solid #fc713e;
}

@media screen and (max-width: 970px) {
  .wrapper .menu-toggle {
    display: block;
  }

  .wrapper .nav-links {
    position: fixed;
    height: 100vh;
    width: 100%;
    max-width: 350px;
    top: 0;
    left: -100%;
    background: #242526;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 20px;
    overflow-y: auto;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.18);
    transition: all 0.3s ease;
    gap: 10px;
  }

  #menu-btn:checked ~ .menu-toggle {
  display: none;
}

  #menu-btn:checked ~ .nav-links {
    left: 0%;
  }

  .nav-links li a {
    width: 100%;
    padding: 12px 20px;
    font-size: 18px;
    text-align: left;
    color: #f2f2f2;
    background: none;
  }

   

  .nav-links li button,
  .nav-links li .button-inicio {
    margin: 10px 10px 0 0;
    padding: 10px 16px;
    border-radius: 6px;
    width: 100%;
  }

  .nav-links li button {
    background-color: #fc713e;
    border: 3px solid #fc713e;
    color: white;
  }

  .nav-links li button:hover {
    background-color: transparent;
  }

  .nav-links li .button-inicio {
    background-color: transparent;
    border: 3px solid #fc713e;
    color: white;
  }

  .nav-links li .button-inicio:hover {
    background-color: #fc713e;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #242526;
  }

  ::-webkit-scrollbar-thumb {
    background: #3A3B3C;
  }
}


`

})
export class NavMenuComponent implements OnInit {

  nombreUsuario: string | null = null;
  tipoUsuario: string | null = null;
  isLoggedIn: boolean = false;
  esOrganizacion: boolean = false;

  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.authService.loggedIn$.subscribe(logged => {
      this.isLoggedIn = logged;
      if (logged) {
        this.nombreUsuario = localStorage.getItem('nombre');
        this.tipoUsuario = localStorage.getItem('tipo');
      } else {
        this.nombreUsuario = null;
        this.tipoUsuario = null;
      }
      this.esOrganizacion = this.authService.esOrganizacion();
    });
  }

  logout() {
    this.authService.logout().subscribe(() => {
    });
  }

  cerrarMenu() {
    const menuBtn = document.getElementById('menu-btn') as HTMLInputElement;
    const navLinks = document.querySelector('.nav-links') as HTMLElement;

    // Solo cerramos el menú si está visible en móvil (pantallas pequeñas)
    if (menuBtn && navLinks && window.innerWidth <= 970) {
      menuBtn.checked = false;
    }
  }


}
