import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotaService } from '../../services/conexion-db.service';
import { FuncionesMascotasService } from '../../services/funciones-mascotas.service';

@Component({
  selector: 'app-mascota-detalle',
  imports: [],
  templateUrl: './mascota-detalle.component.html',
  styles: `
  .mascota-container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.mascota-card {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  overflow: hidden;
}

.mascota-img img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.mascota-info {
  padding: 20px;
}

.mascota-info h2 {
  margin-bottom: 10px;
  color: #333;
}

.mascota-info p {
  margin: 5px 0;
  color: #555;
}

hr {
  margin: 15px 0;
  border: none;
  border-top: 1px solid #ddd;
}

/* Responsive */
@media (min-width: 768px) {
  .mascota-card {
    flex-direction: row;
  }

  .mascota-img {
    flex: 1;
  }

  .mascota-info {
    flex: 2;
  }

  .mascota-img img {
    height: 100%;
  }
}
`
})
export class MascotaDetalleComponent implements OnInit {
  mascota:any
  mascotaID:any
  constructor(private router:ActivatedRoute,
              private conxionSrvc:FuncionesMascotasService,
  ) {}


  ngOnInit(): void {
    this.mascotaID=this.router.snapshot.paramMap.get("id") 
    
    
     this.conxionSrvc.getMascotaPorId(this.mascotaID).subscribe(
      json => {
        let data:any = json
        this.mascota = data.find((mascota: any) => mascota.id == this.mascotaID);
        console.log(this.mascota)
      }
    );  
  }

  getMascota() {
    return this.mascota
  }
 
  
}
