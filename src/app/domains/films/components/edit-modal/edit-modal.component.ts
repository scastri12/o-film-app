import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from './../../../shared/models/film.model';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  @Input() viewModal: boolean = false;
  @Input() film!: Film;
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.viewModal = false;
    this.close.emit();
  }

}
