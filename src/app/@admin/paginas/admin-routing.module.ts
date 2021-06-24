import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {
        path: '',
        loadChildren: ()=>import("./panel/panel.module").then(m=>m.PanelModule)
      },
      {
        path:'usuarios',
        loadChildren:()=>import("./usuarios/usuarios.module").then(m=>m.UsuariosModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
