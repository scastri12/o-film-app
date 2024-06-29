import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './domains/films/pages/list/list.component';
import { FilmDetailComponent } from './domains/films/pages/film-detail/film-detail.component'

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'detail/:id',
    component: FilmDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
