import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from './../../../shared/models/film.model';
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent implements OnInit {
  @Input() film!: Film;
  @Output() goDetail = new EventEmitter();

  imagen: any = 'https://image.tmdb.org/t/p/original/';
  imagenCargada: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.film?.created) {
      this.imagen = this.film?.poster_path;
    } else {
      this.imagen += this.film?.poster_path;
    }
  }

  navigateToDetail(film: any): void {    
    this.router.navigate(['/detail/'+ film.id], { state: { film } });
  }
}
