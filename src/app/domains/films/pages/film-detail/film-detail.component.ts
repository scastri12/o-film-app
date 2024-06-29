import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DetailFilmService } from './../../services/detail-film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css'],
})
export class FilmDetailComponent implements OnInit {
  id?: number;
  film!: {};

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
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
  getFilm(id: number) {
    const idString = id.toString();
    this.detailFilmService.getDetail(idString).subscribe(
      (response) => {
        this.film = response;
        console.log("response: ", this.film);
      },
      (error) => {
        console.error('Error fetching films', error);
      }
    );

  }
}
