import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from './../../services/film.service';
import { Film } from './../../../shared/models/film.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  filmEdited?: any;
  filmDeleted?: any;

  filmList: Film[] = [];
  constructor(
    private readonly filmService: FilmService,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getFilmList();

    console.log('la pelicula editada llego a la lista: ', history.state.film);
  }

  getFilmList() {
    this.filmService.getFilms().subscribe(
      (response) => {
        this.filmList = response.results;
        console.log('response: ', this.filmList);
        this.updateFilm();
        this.deleteFilm();
      },
      (error) => {
        console.error('Error fetching films', error);
      }
    );
  }

  updateFilm() {
    this.filmEdited = history.state.film;
    this.filmList = this.filmList.map((film) => {
      console.log("id: ", film.id, this.filmEdited?.id);
      if (film.id === this.filmEdited?.id) {
        console.log("entro", this.filmEdited?.title);
        return {
          ...film,
          title: this.filmEdited?.title,
          vote_average: this.filmEdited?.vote_average,
          overview: this.filmEdited?.overview,
        };
      }
      return film;
    });
    this.cdRef.detectChanges();
    console.log('este es mi list final: ', this.filmList);
  }

  deleteFilm() {
    this.filmDeleted = history.state.filmDeleted;
    this.filmList = this.filmList.filter(film => film.id !== this.filmDeleted.id);
    this.cdRef.detectChanges();
    console.log('este es mi list final del delete: ', this.filmList);
  }
}
