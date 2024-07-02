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
  persistent: boolean = false;

  filmList: Film[] = [];
  auxFilmList: Film[] = [];
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
        this.updateList();
        this.deleteFilm();
        console.log('persistent: ', this.persistent);
        if (this.persistent === false) {
          console.log('LLEGUEEEEEEEEE: ', this.persistent);
          this.filmList = response.results;
        }else {
          this.auxFilmList = response.results;
          
        }
      },
      (error) => {
        console.error('Error fetching films', error);
      }
    );
  }

  updateList() {
    this.filmEdited = history.state.film;
    console.log('this.filmEdited: ', this.filmEdited);
    if (this.filmEdited) {
      let exist = this.filmList.find((film) => film.id === this.filmEdited.id);
      if (exist) {
        this.updateFilm();
      } else {
        this.getCreatedFilm(this.filmEdited);
      }
      this.cdRef.detectChanges();
    }
  }

  updateFilm() {
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
    this.persistent = true;
  }

  deleteFilm() {
    this.filmDeleted = history.state.filmDeleted;
    if (this.filmDeleted) {
      this.filmList = this.filmList.filter(
        (film) => film.id !== this.filmDeleted?.id
      );
      this.persistent = true;
      this.cdRef.detectChanges();
    }
  }

  getCreatedFilm(event: Film) {
    this.filmList.unshift(event);
    this.persistent = true;
    this.cdRef.detectChanges();
  }

  openCreateFilmModal() {
    this.viewCreateModal = true;
  }
  closeCreateFilmModal() {
    this.viewCreateModal = false;
  }
}
