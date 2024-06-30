import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() film?: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDetail(film: any): void {
    this.router.navigate(['/'], { state: { film } });
    console.log("el film del url", this.film);
  }

}
