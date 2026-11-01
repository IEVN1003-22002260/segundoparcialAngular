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
                path:'maestros',
                loadComponent:()=>
                    import('./utl/ABCMaestros/maestros/maestros').then(
                        (c)=>c.Maestros
                    ),
                },
        ],
    },
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    { path: '**', redirectTo:'admin' },

];
