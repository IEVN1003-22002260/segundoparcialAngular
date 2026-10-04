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
        ],
    },
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    { path: '**', redirectTo:'admin' },

];
