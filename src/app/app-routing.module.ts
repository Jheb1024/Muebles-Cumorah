import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './@public/paginas/home/home.component';

const routes: Routes = [


  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo:'home',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {useHash:true,
    scrollPositionRestoration:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
