import { MaestrosUtl } from '../maestrosUTL';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { ProyectoapiService } from '../maestrosapi.service';

@Component({
  imports: [RouterLink],
  selector: 'app-eliminar-maestro',
  templateUrl: './eliminar.html',
})
export class Eliminar implements OnInit {
  idmaestro: string = '';
  regMaestro: MaestrosUtl = {
    idmaestro: 0,
    nombre: '',
    apaterno: '',
    amaterno: '',
    correo: ''
  };

  constructor(
    private route: ActivatedRoute,
    public maestrosUtl: ProyectoapiService,
    public router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.idmaestro =
      this.route.snapshot.paramMap.get('idmaestro') || '';

    this.maestrosUtl.getMaestro(this.idmaestro).subscribe({
      next: (response) => {
        console.log('Maestro recibido:', response);
        this.regMaestro = response.maestro;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Error al consultar el maestro:', error);
      }
    });

  }

  eliminar(): void {
    this.maestrosUtl.eliminaMaestro(parseInt(this.idmaestro)).subscribe({
      next: () => {
        alert('Maestro eliminado correctamente');
        this.router.navigate(['/utl/maestros']);
      },
      error: (error) => {
        console.error('Error al eliminar:', error);
        alert('No se pudo eliminar el maestro');
      }
    });
  }

}