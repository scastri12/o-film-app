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
  imagen: string = 'https://image.tmdb.org/t/p/original';
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
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  getFilm(id: number) {
    const idString = id.toString();
    this.detailFilmService.getDetail(idString).subscribe(
      (response) => {
        this.film = response;
        this.imagen += this.film?.poster_path;
        this.companiesList = this.film?.production_companies;
        this.companiesList = this.companiesList.map((company: any) => {
          return {
            ...company,
            logo_path: this.imagenCompany + company.logo_path
          }
        });
        console.log(this.film)
      },
      (error) => {
        console.error('Error fetching films', error);
      }
    );
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
