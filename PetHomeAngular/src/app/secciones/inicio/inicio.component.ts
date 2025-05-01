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
  /* From Uiverse.io by musashi-13 */ 
@keyframes autoRun3d {
  from {
    transform: perspective(800px) rotateY(-360deg);
  }
  to {
    transform: perspective(800px) rotateY(0deg);
  }
}

@keyframes animateBrightness {
  10% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(0.1);
  }
  90% {
    filter: brightness(1);
  }
}

.card-3d {
  position: relative;
  width: 400px;
  height: 200px;
  transform-style: preserve-3d;
  transform: perspective(800px);
  animation: autoRun3d 20s linear infinite;
  will-change: transform;
}

.card-3d div {
  position: absolute;
  width: 80px;
  height: 112px;
  background-color: rgb(199, 199, 199);
  border: solid 2px lightgray;
  border-radius: 0.5rem;
  top: 50%;
  left: 50%;
  transform-origin: center center;
  animation: animateBrightness 20s linear infinite;
  transition-duration: 200ms;
  will-change: transform, filter;
}

.carousel-card {
  position: absolute;
  width: 80px;
  height: 112px;
  top: 50%;
  left: 50%;
  transform-origin: center center;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none; /* evita interferencia con el click */
}



/* card-3d:hover {
  animation-play-state: paused !important;
}

.card-3d:hover div {
  animation-play-state: paused !important;
} */

.card-3d div:nth-child(1) {
  transform: translate(-50%, -50%) rotateY(0deg) translateZ(150px);
  animation-delay: -0s;
}

.card-3d div:nth-child(2) {
  transform: translate(-50%, -50%) rotateY(36deg) translateZ(150px);
  animation-delay: -2s;
}

.card-3d div:nth-child(3) {
  transform: translate(-50%, -50%) rotateY(72deg) translateZ(150px);
  animation-delay: -4s;
}

.card-3d div:nth-child(4) {
  transform: translate(-50%, -50%) rotateY(108deg) translateZ(150px);
  animation-delay: -6s;
}

.card-3d div:nth-child(5) {
  transform: translate(-50%, -50%) rotateY(144deg) translateZ(150px);
  animation-delay: -8s;
}

.card-3d div:nth-child(6) {
  transform: translate(-50%, -50%) rotateY(180deg) translateZ(150px);
  animation-delay: -10s;
}

.card-3d div:nth-child(7) {
  transform: translate(-50%, -50%) rotateY(216deg) translateZ(150px);
  animation-delay: -12s;
}

.card-3d div:nth-child(8) {
  transform: translate(-50%, -50%) rotateY(252deg) translateZ(150px);
  animation-delay: -14s;
}

.card-3d div:nth-child(9) {
  transform: translate(-50%, -50%) rotateY(288deg) translateZ(150px);
  animation-delay: -16s;
}

.card-3d div:nth-child(10) {
  transform: translate(-50%, -50%) rotateY(324deg) translateZ(150px);
  animation-delay: -18s;
}

  `
})
export class InicioComponent {

}
