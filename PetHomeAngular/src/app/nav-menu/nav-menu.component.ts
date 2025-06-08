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
  font-family: 'Poppins', sans-serif;
}

.logo {
  height: 90%;
  display: flex;
  align-items: center;
  
}

.logo:hover {
  cursor: pointer;
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
  padding: 0px 30px;
  height: 70px;
  line-height: 70px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wrapper .logo a {
  color: rgb(255, 134, 48);
  font-size: 30px;
  font-weight: 600;
  text-decoration: none;
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
  color: #fc713e;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  padding: 9px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.nav-links li a::before {
  content: '';
  position: absolute;
  bottom: 25px;
  left: 0;
  width: 0;
  height: 4px;
  background: linear-gradient(90deg, #F1C40F, #E74C3C);
  border-radius: 0;
  transition: all 0.5s ease-in-out;
}

.nav-links li a:hover::before {
  width: 100%;
  border-radius: 50%;
}

.nav-links .mobile-item {
  display: none;
}

a {
  position: relative;
}

.content .row img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content .row header {
  color: #f2f2f2;
  font-size: 20px;
  font-weight: 500;
}

.content .row .mega-links {
  margin-left: -40px;
  border-left: 1px solid rgba(255, 255, 255, 0.09);
}

.row .mega-links li {
  padding: 0 20px;
}

.row .mega-links li a {
  padding: 0px;
  padding: 0 20px;
  color: #d9d9d9;
  font-size: 17px;
  display: block;
}

.wrapper .btn {
  color: black;
  font-size: 20px;
  cursor: pointer;
  display: none;
}

.wrapper .btn.close-btn {
  position: absolute;
  right: 30px;
  top: 10px;
}

@media screen and (max-width: 970px) {
  .wrapper .btn {
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
    box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.18);
    transition: all 0.3s ease;
    gap: 10px;
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

  #menu-btn:checked ~ .nav-links {
    left: 0%;
  }

  #menu-btn:checked ~ .btn.menu-btn {
    display: none;
  }

  #close-btn:checked ~ .btn.menu-btn {
    display: block;
  }

  .nav-links li {
    margin: 0;
    width: 100%;
  }

  .nav-links li a,
  .nav-links li button {
    width: 100%;
    padding: 12px 20px;
    font-size: 18px;
    display: block;
    text-align: left;
    border-radius: 5px;
    background: none;
    color: #f2f2f2;
  }

  .nav-links li a:hover,
  .nav-links li button:hover {
    background: #3A3B3C;
  }

  .nav-links .desktop-item {
    display: none;
  }

  .nav-links .mobile-item {
    display: block;
    font-size: 18px;
    padding: 12px 20px;
    color: #f2f2f2;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .nav-links .mobile-item:hover {
    background: #3A3B3C;
  }

  .content .row header {
    font-size: 19px;
  }
}

nav input {
  display: none;
}

.body-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  padding: 0 30px;
}

.body-text div {
  font-size: 45px;
  font-weight: 600;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  gap: 15px;
  background-color: #fc713e;
  outline: 3px #fc713e solid;
  outline-offset: -3px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 400ms;
  height: 60%;
}

.button .text {
  color: white;
  font-weight: 600;
  font-size: 15px;
  transition: 400ms;
  margin: 0;
}

.button:hover {
  background-color: transparent;
}

.button:hover .text {
  color: black;
}

.button-inicio {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  gap: 15px;
  background-color: #f2f2f2;
  outline-offset: -3px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 400ms;
  height: 60%;
}

.button-inicio .text {
  font-weight: 600;
  font-size: 15px;
  transition: 400ms;
  margin: 0;
}

.button-inicio:hover {
  background-color: transparent;
}

.button-inicio:hover .text {
  color: black;
}

`

})
export class NavMenuComponent implements OnInit {
  
nombreUsuario: string | null = null;
tipoUsuario: string | null = null;
isLoggedIn: boolean = false;
esOrganizacion: boolean = false;

  constructor(private authService: AuthService) {}
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
      // Puedes agregar navegación u otras cosas
    });
  }

}
