import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotaService } from '../../services/conexion-db.service';
import { FuncionesMascotasService } from '../../services/funciones-mascotas.service';

@Component({
  selector: 'app-mascota-detalle',
  imports: [],
  templateUrl: './mascota-detalle.component.html',
  styles: ``
})
export class MascotaDetalleComponent implements OnInit {
  mascota:any
  mascotaID:any
  constructor(private router:ActivatedRoute,
              private conxionSrvc:FuncionesMascotasService,
  ) {}


  ngOnInit(): void {
    this.mascotaID=this.router.snapshot.paramMap.get("id") 
    this.conxionSrvc.getMascotaPorId(this.mascotaID)
    
      
  }
}
