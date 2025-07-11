import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { MascotaService } from '../../services/conexion-db.service';
import { FuncionesMascotasService } from '../../services/funciones-mascotas.service';
import { MascotaCardComponent } from '../adopta/mascota-card/mascota-card.component';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mascota-detalle',
  imports: [MascotaCardComponent, RouterLink],
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

.imagen-principal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
}

.imagen-principal img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.info-detalle {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
}

.info-principal h1 {
  font-size: 3rem;
  margin-bottom: 5px;
}

.subtitulo {
  font-size: 1.5rem;
  color: #666;
}

.descripcion {
  margin: 15px 0;
  font-size: 1.4rem;
  color: #333;
}

.info-extra {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-extra h3 {
  font-size: 1.9rem;
  margin-bottom: 5px;
  font-weight: 600;
}

.info-extra p {
  font-size: 1.3rem;
}

.info-lateral {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-lateral p{
  font-size: 1.1rem;
}

.info-lateral button{
  font-size: 1.1rem;
}

.adopcion-box,
.fundacion-box {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #fafafa;
  text-align: center;
}

.btn-naranja {
  margin: 10px 10px 0 0;
  background-color: #fc713e;
  border: 3px solid #fc713e;
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

.button-whatsapp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: #25D366;
  color: white;
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.button-whatsapp:hover {
  background-color: #1EBE56;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.button-whatsapp:active {
  background-color: #169E49;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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

  esTuMascota(): string | null {
    return localStorage.getItem('id'); // asegúrate de que este valor sea el ID de la protectora logueada
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
      const protectoraId = localStorage.getItem('id');
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
              this.route.navigate([`/detalle-organizacion/${protectoraId}`]);
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
