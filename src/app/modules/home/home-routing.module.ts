import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { ContactameComponent } from './views/contactame/contactame.component';
import { EducacionComponent } from './views/educacion/educacion.component';
import { HabilidadesComponent } from './views/habilidades/habilidades.component';
import { PortafolioComponent } from './views/portafolio/portafolio.component';
import { SobreMiComponent } from './views/sobre-mi/sobre-mi.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'sobre-mi',
        component: SobreMiComponent,
      },
      {
        path: 'educacion',
        component: EducacionComponent,
      },
      {
        path: 'habilidades',
        component: HabilidadesComponent,
      },
      {
        path: 'portafolio',
        component: PortafolioComponent,
      },
      {
        path: 'contactame',
        component: ContactameComponent,
      },
      {
        path: '**',
        redirectTo: 'sobre-mi',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
