import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  imports: [],
  templateUrl: './sobre-nosotros.component.html',
  styles: `/* Generic Card */
  // .cardd {
  //   background: #fff;
  //   max-width: 800px;
  //   margin: 2rem auto;
  //   padding: 1.5rem;
  //   border-radius: 10px;
  //   box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  //   text-align: center;
  // }
  // .cardd h2 {
  //   margin-bottom: 1rem;
  //   font-size: 1.75rem;
  //   color: #333;
  // }
  // .cardd p, .cardd ul {
  //   color: #555;
  //   font-size: 1rem;
  //   line-height: 1.6;
  // }
  // .cardd ul {
  //   list-style: disc inside;
  //   padding: 0;
  //   margin: 0;
  // }
  /* From Uiverse.io by andrew-demchenk0 */ 
/* before adding the photo to the div with the "card-photo" class, in the css clear the styles for .card-photo and remove .card-photo::before and .card-photo::after, then set the desired styles for .card- photo. */

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

.card-photo {
/* clear and add new css */
  transform: scale(0.3) translate(220px, 230px);
  width: 250px;
  height: 250px;
  margin-left: -125px;
  margin-top: -125px;
  background: radial-gradient(circle,rgba(0,0,0,0.15) 50%,rgba(0,0,0,0) 50.8%) 14% 30%/11% 11%,radial-gradient(circle,#ffdab9 50%,rgba(255,218,185,0) 50.8%) 10% 30%/16% 16%,radial-gradient(circle,#8b4513 50%,rgba(139,69,19,0) 50.8%) 7.5% 29%/20% 20%,radial-gradient(circle,rgba(0,0,0,0.15) 50%,rgba(0,0,0,0) 50.8%) 86% 30%/11% 11%,radial-gradient(circle,#ffdab9 50%,rgba(255,218,185,0) 50.8%) 90% 30%/16% 16%,radial-gradient(circle,#8b4513 50%,rgba(139,69,19,0) 50.8%) 92.5% 29%/20% 20%,radial-gradient(circle at 50% 0,#ffdab9 29.5%,#8b4513 30%,#8b4513 35%,rgba(139,69,19,0) 35.5%) 50% 95%/40% 20%,radial-gradient(ellipse at 50% 100%,rgba(139,69,19,0) 49%,#8b4513 49.5%,#8b4513 52%,rgba(139,69,19,0) 52.5%) 50% 110%/120% 40%,radial-gradient(circle at 50% 0,rgba(255,255,255,0) 35%,white 35%,white 45%,rgba(255,255,255,0) 45.5%) 50% 89%/40% 13%,linear-gradient(#8b4513,#8b4513) 37% 100%/.25em 22%,linear-gradient(#8b4513,#8b4513) 63% 100%/.25em 22%,linear-gradient(80deg,rgba(0,0,0,0) 50%,#333 50.5%) 24% 100%/1em 18%,linear-gradient(-80deg,rgba(0,0,0,0) 50%,#333 50.5%) 76% 100%/1em 18%,linear-gradient(162deg,rgba(0,0,0,0) 10%,#333 10%) 30% 100%/1.5em 21%,linear-gradient(-162deg,rgba(0,0,0,0) 10%,#333 10%) 70% 100%/1.5em 21%,radial-gradient(ellipse at 100% 100%,#556b2f 50%,rgba(85,107,47,0) 50.5%) 0 100%/37% 29%,radial-gradient(ellipse at 0 100%,#556b2f 50%,rgba(85,107,47,0) 50.5%) 100% 100%/37% 29%,radial-gradient(ellipse at 50% 100%,#222 51%,rgba(0,0,0,0) 51.5%) 50% 110%/120% 40%,radial-gradient(circle at 50% 0,rgba(0,0,0,0.15) 40%,rgba(0,0,0,0) 40.5%) 50% 82%/20% 20%,linear-gradient(to right,#8b4513 4px,rgba(139,69,19,0) 4px) 50% 80%/20% 20%,linear-gradient(to left,#8b4513 4px,rgba(139,69,19,0) 4px) 50% 80%/20% 20%,linear-gradient(#ffdab9,#ffdab9) 50% 80%/20% 20%,linear-gradient(#48240a,#48240a) 50% 100%/65% 60%,radial-gradient(circle,white 30%,rgba(255,255,255,0) 62%) 50% 50%/100% 100%;
  background-color: #ccc;
  background-repeat: no-repeat;
  border-radius: 30%;
}

/* delete */
.card-photo::before {
  display: block;
  content: '';
  position: absolute;
  box-sizing: border-box;
  width: 160px;
  height: 200px;
  left: 50%;
  top: -10%;
  margin-left: -80px;
  background: radial-gradient(circle at 50% 0,#ffdab9 30%,#8b4513 30.5%,#8b4513 41%,rgba(139,69,19,0) 41.5%) 50% 76%/2em 2em,radial-gradient(ellipse,rgba(139,69,19,0) 25%,#5e2f0d 25.5%,#5e2f0d 40%,rgba(139,69,19,0) 40.5%) 50% 100%/100% 40%,radial-gradient(ellipse at 50% 0,#8b4513 40%,#ffdab9 40.5%,#ffdab9 58%,rgba(255,218,185,0) 59%) 50% 83%/3em 1em,linear-gradient(#5e2f0d,#5e2f0d) 50% 86%/1em 1em,radial-gradient(circle,#5e2f0d 40%,rgba(139,69,19,0) 40.5%) 26% 56%/1em 1em,radial-gradient(circle,#5e2f0d 40%,rgba(139,69,19,0) 40.5%) 74% 56%/1em 1em,radial-gradient(ellipse,rgba(139,69,19,0) 52%,#8b4513 52.5%,#8b4513 55%,rgba(139,69,19,0) 55.5%) 50% 100%/150% 80%,radial-gradient(ellipse,rgba(0,0,0,0) 46%,rgba(0,0,0,0.15) 46.5%,rgba(0,0,0,0.15) 53%,rgba(0,0,0,0) 53%) 50% 100%/150% 80%,radial-gradient(ellipse,#ffdab9 53%,rgba(255,218,185,0) 53.5%) 50% 100%/150% 80%,radial-gradient(ellipse at 50% 100%,rgba(139,69,19,0) 35.5%,#8b4513 36%,#8b4513 38%,white 38.5%) 50% -45%/110% 60%,radial-gradient(circle,#444 23%,rgba(0,0,0,0) 24%) 30% 26%/1em 1em,radial-gradient(circle,#444 23%,rgba(0,0,0,0) 24%) 40% 25%/1em 1em,radial-gradient(circle,#444 23%,rgba(0,0,0,0) 24%) 50% 24.5%/1em 1em,radial-gradient(circle,#444 23%,rgba(0,0,0,0) 24%) 60% 25%/1em 1em,radial-gradient(circle,#444 23%,rgba(0,0,0,0) 24%) 70% 26%/1em 1em,radial-gradient(ellipse,#666 63%,#8b4513 63.5%,#8b4513 66%,rgba(139,69,19,0) 66.5%) 50% 100%/150% 80%,radial-gradient(ellipse,rgba(139,69,19,0) 40%,#5e2f0d 40.5%) 50% 0/150% 80%,linear-gradient(rgba(0,0,0,0.15),rgba(0,0,0,0.15)) 50% 50%/100% 100%;
  background-repeat: no-repeat;
  background-color: #ffdab9;
  border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
  border: 4px solid #8b4513;
  box-shadow: inset 0 -.2em 0 .5em rgba(0,0,0,0.15),inset 0 -1.6em 0 #5e2f0d;
}

/* delete */
.card-photo::after {
  display: block;
  content: '';
  position: absolute;
  width: 2.5em;
  height: .8em;
  left: 28.5%;
  top: 26%;
  background-color: #5e2f0d;
  border-radius: .3em;
  box-shadow: 4.2em 0 0 #5e2f0d;
}

.card-title {
  text-align: center;
  color: var(--font-color);
  font-size: 20px;
  font-weight: 400;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.card-title span {
  font-size: 15px;
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

.card-photo:hover {
  transition: 0.3s;
  transform: scale(0.4) translate(160px, 150px);
}
  
  /* Hero Section */
  .hero {
    position: relative;
    height: 60vh;
    background: url('/assets/img/hero-sobre.jpg') center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.5);
  }
  .overlay {
    position: relative;
    color: #fff;
    text-align: center;
    padding: 1rem;
  }
  .overlay .label {
    font-size: 0.85rem;
    text-transform: uppercase;
    opacity: 0.8;
  }
  .overlay h1 {
    font-size: 2.5rem;
    margin: 0.5rem 0;
  }
  .overlay p {
    font-size: 1.1rem;
    max-width: 600px;
    margin: 1rem auto;
  }
  .btn.more {
    margin-top: 1rem;
    padding: 0.6rem 1.2rem;
    background: #ff7f00;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
  }
  .btn.more:hover {
    background: #e66e00;
  }
  
  /* Team Card */
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }
  .member img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 0.75rem;
  }
  .member h3 {
    margin: 0.25rem 0;
    font-size: 1.125rem;
    color: #333;
  }
  .member .role {
    font-size: 0.95rem;
    color: #777;
  }
  
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    gap:1rem;
  }
.sobre-nosotros {
  width: 100%;
  margin: 0;
  padding: 0;
}

.background-overlay {
  width: 100%;
  min-height: 400px;
  background-image: url('/assets/img/pexels-annetnavi-792775.jpg'); /* Cambia esta ruta */
  background-size: cover;
  background-position: center 30%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Oscurece la imagen */
  z-index: 1;
}

.contenido {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.contenido h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

/* Mantén aquí tus estilos del corazón (ya existentes) */


/* From Uiverse.io by catraco */ 
.heart-container {
  --heart-color: rgb(255, 91, 137);
  position: relative;
  width: 50px;
  height: 50px;
  transition: .3s;
}

.heart-container .checkbox {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 20;
  cursor: pointer;
}

.heart-container .svg-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.heart-container .svg-outline,
        .heart-container .svg-filled {
  fill: var(--heart-color);
  position: absolute;
}

.heart-container .svg-filled {
  animation: keyframes-svg-filled 1s;
  display: none;
}

.heart-container .svg-celebrate {
  position: absolute;
  animation: keyframes-svg-celebrate .5s;
  animation-fill-mode: forwards;
  display: none;
  stroke: var(--heart-color);
  fill: var(--heart-color);
  stroke-width: 2px;
}

.heart-container .checkbox:checked~.svg-container .svg-filled {
  display: block
}

.heart-container .checkbox:checked~.svg-container .svg-celebrate {
  display: block
}

@keyframes keyframes-svg-filled {
  0% {
    transform: scale(0);
  }

  25% {
    transform: scale(1.2);
  }

  50% {
    transform: scale(1);
    filter: brightness(1.5);
  }
}

@keyframes keyframes-svg-celebrate {
  0% {
    transform: scale(0);
  }

  50% {
    opacity: 1;
    filter: brightness(1.5);
  }

  100% {
    transform: scale(1.4);
    opacity: 0;
    display: none;
  }
}

.iconos-sobre-nosotros {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}


.iconos-sobre-nosotros .heart-container {
  width: 50px;
  height: 50px;
}

.iconos-sobre-nosotros .home-icon {
  width: 100px;
  height: auto;
  display: flex;
  align-items: center;
  color: rgb(235, 40, 176);
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
}

.about-header {
  text-align: center;
  background:white;
  padding: 2rem;
  border-radius: 20px;
  font-size: 1.8rem;
  font-weight: bold;
  color: #333333;
}

.intro {
  color:   color: #333333;
  font-weight: 400;
;  
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background:white;
}



// .join-org-card {
//   background: #fff0f6;
//   padding: 2rem;
//   border-radius: 20px;
//   text-align: center;
//   box-shadow: 0 5px 15px rgba(0,0,0,0.05);
// }

// .join-org-card h3 {
//   margin-bottom: 1rem;
//   color: #c9184a;
// }

// .join-org-card button {
//   background-color: #c9184a;
//   color: white;
//   border: none;
//   padding: 0.8rem 1.5rem;
//   border-radius: 12px;
//   cursor: pointer;
//   font-weight: bold;
//   transition: background-color 0.3s ease;
// }

// .join-org-card button:hover {
//   background-color: #a3133a;
// }

.team-section {
  background:white;
  padding: 2rem;
  border-radius: 20px;
}

.team-section h3 {
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

/* Reutiliza tu .card de equipo tal como lo tienes */


  `
})
export class SobreNosotrosComponent {

}
