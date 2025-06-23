import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  imports: [],
  templateUrl: './sobre-nosotros.component.html',
  styles: `
/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.card {
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --main-color: #323232;
  width: 200px;
  height: 254px;
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  margin: 0 auto 1rem auto;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.card-title {
  text-align: center;
  color: var(--font-color);
  font-size: 23px;
}

.card-title span {
  font-size: 18px;
  color: var(--font-color-sub);
}

.card-socials {
  display: flex;
  height: 0;
  opacity: 0;
  margin-top: 20px;
  gap: 20px;
  transition: 0.5s;
}

.card-socials-btn {
  width: 25px;
  height: 25px;
  border: none;
  background: transparent;
  cursor: pointer;
}

.card-socials-btn svg {
  width: 100%;
  height: 100%;
  fill: var(--main-color);
}

.card:hover > .card-socials {
  opacity: 1;
  height: 35px;
}

.card-socials-btn:hover {
  transform: translateY(-5px);
  transition: all 0.15s;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  gap: 1rem;
}

.sobre-nosotros {
  margin-left: calc(-50vw + 50%);
  background-image: url('/assets/img/perro-abandonado.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 100vh;
  color: #fff;
}

.overlay {
  position: relative;
  z-index: 1;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
  min-height: 100vh;
}

.contenido {
  max-width: 900px;
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.impacto {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.mensaje {
  font-size: 1.7rem;
  line-height: 1.6;
}

.hero-text-blur {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 1rem 2rem;
  border-radius: 12px;
  display: inline-block;
}

.about-section {
  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
  border-radius: 20px;
}

.about-container {
  width: 100%;
  max-width: 1200px;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  justify-content: center;
}

.team-section {
  background: white;
  padding: 2rem;
  border-radius: 20px;
}

.team-section h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #333333;
}

.team-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
  `
})
export class SobreNosotrosComponent {

}
