import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() film?: any;
  @Input() viewAddFilm!: boolean;
  @Output() openAddFilmModal = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDetail(film: any): void {
    this.router.navigate(['/'], { state: { film } });
  }

  sendOpenModal() {
    this.openAddFilmModal.emit();
  }

}
