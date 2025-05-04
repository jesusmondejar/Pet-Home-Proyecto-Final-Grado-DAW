import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  imports: [],
  templateUrl: './sobre-nosotros.component.html',
  styles: `/* Generic Card */
  .card {
    background: #fff;
    max-width: 800px;
    margin: 2rem auto;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    text-align: center;
  }
  .card h2 {
    margin-bottom: 1rem;
    font-size: 1.75rem;
    color: #333;
  }
  .card p, .card ul {
    color: #555;
    font-size: 1rem;
    line-height: 1.6;
  }
  .card ul {
    list-style: disc inside;
    padding: 0;
    margin: 0;
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
  }`
})
export class SobreNosotrosComponent {

}
