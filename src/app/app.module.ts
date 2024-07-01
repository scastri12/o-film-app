import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FilmComponent } from './domains/films/components/film/film.component';
import { ListComponent } from './domains/films/pages/list/list.component';
import { FilmService } from './domains/films/services/film.service';
import { HeaderComponent } from './domains/shared/components/header/header.component';
import { FilmDetailComponent } from './domains/films/pages/film-detail/film-detail.component';
import { EditModalComponent } from './domains/films/components/edit-modal/edit-modal.component';
import { CreateModalComponent } from './domains/films/components/create-modal/create-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    ListComponent,
    HeaderComponent,
    FilmDetailComponent,
    EditModalComponent,
    CreateModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
