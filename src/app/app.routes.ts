import { Routes } from '@angular/router';

export const routes: Routes = [
//es un arreglo de objetos
    {
        path:'Formulario',
        children:[
                {
                path:'distancia',
                loadComponent:()=>
                    import('./Formulario/distancia/distancia').then(
                        (c)=>c.Distancia
                    ),
                },
                {
                path:'zodiaco',
                loadComponent:()=>
                    import('./Formulario/zodiaco/zodiaco').then(
                        (c)=>c.Zodiaco
                    ),
                },
        
        ],
    },

     {
        path:'escuela',
        children:[
                {
                path:'lista-escuela',
                loadComponent:()=>
                    import('./escuela/lista-escuela/lista-escuela').then(
                        (c)=>c.ListaEscuela
                    ),
                },
                {
                path:'cinepolis',
                loadComponent:()=>
                    import('./escuela/cinepolis/cinepolis').then(
                        (c)=>c.Cinepolis
                    ),
                },
                {
                path:'ventas',
                loadComponent:()=>
                    import('./escuela/ventas/ventas').then(
                        (c)=>c.Ventas
                    ),
                },
        ],
    },
    {
        path:'utl',
        children:[
                {
                path:'alumnos',
                loadComponent:()=>
                    import('./utl/ABCAlumnos/alumnos/alumnos').then(
                        (c)=>c.Alumnos
                    ),
                },
                  {
                path:'agregar',
                loadComponent:()=>
                    import('./utl/ABCAlumnos/agregar/agregar').then(
                        (c)=>c.Agregar
                    ),
                },
                  {
                path:'editar/:matricula',
                loadComponent:()=>
                    import('./utl/ABCAlumnos/editar/editar').then(
                        (c)=>c.Editar
                    ),
                },
                  {
                path:'eliminar/:matricula',
                loadComponent:()=>
                    import('./utl/ABCAlumnos/eliminar/eliminar').then(
                        (c)=>c.Eliminar
                    ),
                },
                {
                path:'maestros',
                loadComponent:()=>
                    import('./utl/ABCMaestros/maestros/maestros').then(
                        (c)=>c.Maestros
                    ),
                },
                {
                path: 'agregar-maestro',
                loadComponent: () =>
                    import('./utl/ABCMaestros/agregar/agregar').then((c) => c.Agregar),
                },
                {
                path: 'editar-maestro/:idmaestro',
                loadComponent: () =>
                    import('./utl/ABCMaestros/editar/editar').then((c) => c.Editar),
                },
                {
                path: 'eliminar-maestro/:idmaestro',
                loadComponent: () =>
                    import('./utl/ABCMaestros/eliminar/eliminar').then((c) => c.Eliminar),
                },
        ],
    },
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    { path: '**', redirectTo:'admin' },

];
