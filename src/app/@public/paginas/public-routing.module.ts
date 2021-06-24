import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path:'',
    component:PublicComponent,
    children:[
      {
        path: 'home',
        loadChildren: ()=>import("./home/home.module").then(m=>m.HomeModule)
      },
      {
        path:'contacto',
        loadChildren:()=>import("./contacto/contacto.module").then(m=>m.ContactoModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
