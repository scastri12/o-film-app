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
  viewCreateModal: boolean = false;

  filmList: Film[] = [];
  constructor(
    private readonly filmService: FilmService,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getFilmList();
  }

  getFilmList() {
    this.filmService.getFilms().subscribe(
      (response) => {
        this.filmList = response.results;
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
      if (film.id === this.filmEdited?.id) {
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
  }

  deleteFilm() {
    this.filmDeleted = history.state.filmDeleted;
    this.filmList = this.filmList.filter(
      (film) => film.id !== this.filmDeleted?.id
    );
    this.cdRef.detectChanges();
  }

  getCreatedFilm(event: Film) {
    this.filmList.unshift(event);
    this.cdRef.detectChanges();
  }

  openCreateFilmModal() {
    this.viewCreateModal = true;
  }
  closeCreateFilmModal() {
    this.viewCreateModal = false;
  }
}
