import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { ProyectoapiService } from '../maestrosapi.service';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-editar-maestro',
  templateUrl: './editar.html',
})
export class Editar implements OnInit {
  formulario!: FormGroup;
  idmaestro: string = '';

  constructor(
    private route: ActivatedRoute,
    public maestrosUtl: ProyectoapiService,
    public fb: FormBuilder,
    public router: Router
  ) {}

  ngOnInit(): void {

    this.formulario = this.fb.group({
      idmaestro: [{ value: '', disabled: true }],
      nombre: [''],
      apaterno: [''],
      amaterno: [''],
      correo: ['']
    });

    this.idmaestro =
      this.route.snapshot.paramMap.get('idmaestro') || '';

    this.maestrosUtl.getMaestro(this.idmaestro).subscribe({
      next: (response) => {
        this.formulario.patchValue(response.maestro);
      },
      error: (error) => {
        console.error('Error al consultar el maestro:', error);
      }
    });

  }

  onSubmit(): void {

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    // getRawValue incluye el idmaestro aunque esté deshabilitado
    const maestro = this.formulario.getRawValue();

    this.maestrosUtl.modificarMaestro(parseInt(this.idmaestro), maestro).subscribe({

      next: (response) => {
        if (response) {
          alert('Maestro actualizado correctamente');
          this.router.navigate(['/utl/maestros']);
        } else {
          alert('No se pudo actualizar el maestro');
        }
      },

      error: (error) => {
        console.error('Error al actualizar:', error);
        alert('Ocurrió un error al actualizar el maestro');
      }

    });

  }

}