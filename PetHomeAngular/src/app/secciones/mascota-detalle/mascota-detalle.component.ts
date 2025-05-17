import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotaService } from '../../services/conexion-db.service';
import { FuncionesMascotasService } from '../../services/funciones-mascotas.service';
import { MascotaCardComponent } from '../adopta/mascota-card/mascota-card.component';

@Component({
  selector: 'app-mascota-detalle',
  imports: [MascotaCardComponent],
  templateUrl: './mascota-detalle.component.html',
  styles: `
  .tarjeta-mascota {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 24px;
  max-width: 1200px;
  margin: 20px auto;
}

.galeria {
  text-align: center;
}

.imagen-principal img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
}

.miniaturas {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
  flex-wrap: wrap;
}

.miniaturas img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border 0.2s;
}

.miniaturas img.activa {
  border-color: #ff5722;
}

.info-detalle {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
}

.info-principal h1 {
  font-size: 2rem;
  margin-bottom: 5px;
}

.subtitulo {
  font-size: 1rem;
  color: #666;
}

.descripcion {
  margin: 15px 0;
  font-size: 1.1rem;
  color: #333;
}

.info-extra {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-extra h3 {
  margin-bottom: 5px;
  font-weight: 600;
}

.info-lateral {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.adopcion-box, .fundacion-box {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #fafafa;
  text-align: center;
}



.btn-naranja {
  margin-top: 10px;
  background-color: #fc713e;
  outline: 3px #fc713e solid;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
   transition: 400ms;
}

.btn-naranja:hover {
  background-color: transparent;
  color: black;
 
  
}


@media (min-width: 768px) {
  .info-detalle {
    flex-direction: row;
    gap: 40px;
  }

  .info-principal {
    flex: 3;
  }

  .info-lateral {
    flex: 1;
  }

  .info-extra {
    flex-direction: row;
    justify-content: space-between;
  }

  .info-extra div {
    flex: 1;
    padding-right: 15px;
  }
}
`
})
export class MascotaDetalleComponent implements OnInit {
  mascota:any
  mascotaID:any
  constructor(private router:ActivatedRoute,
              private conxionSrvc:FuncionesMascotasService,
              private conxionSrvc2:MascotaService,
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


  getMascotaPorProtectora(id: number) {
    return this.conxionSrvc.getMascotasPorProtectoraTop3(id)  
  }
 
  
}
