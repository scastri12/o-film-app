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
  searchTerm: string = '';
  filteredMovies: Film[] = [] ;

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
        this.updateList();
        this.deleteFilm();
      },
      (error) => {
        console.error('Error fetching films', error);
      }
    );
  }

  updateList() {
    this.filmEdited = history.state.film;
    if (this.filmEdited?.id) {
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

  getSearchTerm(title: string) {
    this.searchTerm = title;
    this.filterMovies();
  }

  filterMovies() {
    this.filteredMovies = this.filmList.filter(film =>
      film.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log("mi lista filtrada: ", this.filteredMovies);
    this.filmList = this.filteredMovies;
    this.cdRef.detectChanges();
  }
}
