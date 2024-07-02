import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './domains/films/pages/list/list.component';
import { FilmDetailComponent } from './domains/films/pages/film-detail/film-detail.component';
import { EditModalComponent } from './domains/films/components/edit-modal/edit-modal.component';
import { AboutUsComponent } from './domains/shared/components/about-us/about-us.component';
const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'detail',
    component: FilmDetailComponent,
  },
  {
    path: 'edit',
    component: EditModalComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
