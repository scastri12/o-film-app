import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  @Input() viewModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.viewModal = false;
  }
  openModal() {
    this.viewModal = true;
  }

}
