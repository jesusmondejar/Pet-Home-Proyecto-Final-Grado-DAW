import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Router,ActivatedRoute, RouterLink } from '@angular/router';
import { MascotaService } from '../../services/conexion-db.service';
import { FuncionesMascotasService } from '../../services/funciones-mascotas.service';
import { MascotaCardComponent } from '../adopta/mascota-card/mascota-card.component';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mascota-detalle',
  imports: [MascotaCardComponent,RouterLink],
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
   margin: 10px 10px 0 0;
  background-color: #fc713e;
  border: 3px solid #fc713e; /* Mejor usar border que outline */
  color: white;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: 400ms;
  box-sizing: border-box;
}

.btn-naranja:hover {
  background-color: transparent;
  color: black;
 
  
}

.pet-thumb {
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Ajusta este valor según el espacio que desees */
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
  backendUrl = 'http://localhost:8000';
  mascota: any
  mascotaID: any
  mascotas: any[] = []
  esOrganizacion: boolean = false;
  constructor(private router: ActivatedRoute,
    private route: Router,
    private conxionSrvc: FuncionesMascotasService,
    private conxionSrvc2: MascotaService,
    private authService: AuthService
  ) { }


  ngOnInit(): void {
    this.mascotaID = this.router.snapshot.paramMap.get("id")


    this.conxionSrvc.getMascotaPorId(this.mascotaID).subscribe(
      json => {
        let data: any = json
        this.mascota = data.find((mascota: any) => mascota.id == this.mascotaID);
        console.log(this.mascota)
        this.loadMascotas();
      }

    );
    this.esOrganizacion = this.authService.esOrganizacion();
  }

  getMascota() {
    return this.mascota
  }

  estaLogueado(): boolean {
    return !!localStorage.getItem('tipo'); // o el nombre que uses para guardar el token o datos
  }

  loadMascotas() {
    this.conxionSrvc2.getMascotasPorProtectora(this.mascota.protectora.id).subscribe(json => {
      this.mascotas = json;
      console.log(this.mascotas);
    });
  }

 eliminarMascota(id: number) {
  Swal.fire({
    icon: "warning",
    title: "¿Estás seguro?",
    text: "Esta acción no se puede deshacer",
    showCancelButton: true,
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar",
    customClass: {
      confirmButton: 'btn-naranja-swal',
      cancelButton: 'btn-cancel',
      popup: 'swal2-button-margin'
    },
    buttonsStyling: false
  }).then((result) => {
    if (result.isConfirmed) {
      // Si confirma, llamamos al servicio para eliminar
      this.conxionSrvc2.borrarMascota(id).subscribe({
        next: (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Eliminada',
            text: 'La mascota ha sido eliminada correctamente',
            confirmButtonText: 'Aceptar',
            customClass: {
              confirmButton: 'btn-naranja-swal'
            },
            buttonsStyling: false
          }).then(() => {
            this.route.navigate(['/adopta']);
          });
        },
        error: (err) => {
          console.error('Error al eliminar la mascota:', err);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un error al eliminar la mascota.',
            confirmButtonText: 'Cerrar',
            customClass: {
              confirmButton: 'btn-naranja-swal'
            },
            buttonsStyling: false
          });
        }
      });
    }
  });
}



}
