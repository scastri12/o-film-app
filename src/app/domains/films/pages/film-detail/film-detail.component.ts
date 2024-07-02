import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Film } from './../../../shared/models/film.model';
//import { EditModalComponent } from './../../components/edit-modal/edit-modal.component'
import { DetailFilmService } from './../../services/detail-film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css'],
})
export class FilmDetailComponent implements OnInit {
  id?: number;
  film!: Film;
  isCreated: boolean = false;
  imagen: any = 'https://image.tmdb.org/t/p/original';
  imagenCompany: string = 'https://image.tmdb.org/t/p/original';
  viewModal: boolean = false;
  companiesList: any;
  constructor(
    private readonly detailFilmService: DetailFilmService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getId();
    if (this.id) {
      this.getFilm(this.id);
    }
  }

  getId() {
    this.id = history.state.film.id;
  }

  getFilm(id: number) {
    if (history.state.film.created === true) {
      this.film = history.state.film;
      this.imagen = this.film.poster_path;
      console.log('llegueee:', this.film);
    } else {
      const idString = id.toString();
      this.detailFilmService.getDetail(idString).subscribe(
        (response) => {
          this.film = response;
          this.imagen += this.film?.poster_path;
          this.companiesList = this.film?.production_companies;
          this.companiesList = this.companiesList.filter(
            (company: any) => company.logo_path !== null
          );
          this.companiesList = this.companiesList.map((company: any) => {
            return {
              ...company,
              logo_path: this.imagenCompany + company.logo_path,
            };
          });
          console.log(this.film);
        },
        (error) => {
          console.error('Error fetching films', error);
        }
      );
    }
  }

  openEditModal() {
    this.viewModal = true;
  }

  closeEditModal() {
    this.viewModal = false;
  }

  getFilmEdited(event: any) {
    this.updateFilm(event);
  }

  updateFilm(film: any) {
    this.film.title = film.title;
    this.film.vote_average = Number(film.rating);
    this.film.overview = film.overview;
  }
}
