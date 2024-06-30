import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from './../../../shared/models/film.model';
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  
  @Input() film!: Film;
  @Output() goDetail = new EventEmitter();

  imagen: string = "https://image.tmdb.org/t/p/original/";


  constructor() { }

  ngOnInit(): void {
    this.imagen += this.film.poster_path;
  }

}
