import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() film?: any;
  @Input() viewAddFilm!: boolean;
  @Output() openAddFilmModal = new EventEmitter();
  @Output() searchTerm = new EventEmitter();
  title: any = '';

  

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToDetail(film: any): void {
    this.router.navigate(['/'], { state: { film } });
  }

  navigateToAbout(): void {
    this.router.navigate(['/about']);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  sendOpenModal() {
    this.openAddFilmModal.emit();
  }

  sendSearchTerm() {
    this.searchTerm.emit(this.title);
    console.log("this.title: ", this.title);

  }
}
