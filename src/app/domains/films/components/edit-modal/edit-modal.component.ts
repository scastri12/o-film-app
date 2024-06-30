import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  editForm!: FormGroup;
  

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.getFormValues();
    //console.log("film en edit: ", this.film);
    //console.log("editForm ", this.editForm);
  }

  getFormValues() {
    this.editForm = this.fb.group({
      title: [this.film?.title, Validators.required],
      rating: [this.film?.vote_average, Validators.required],
      category: ["", Validators.required],
      overview: [this.film?.overview, Validators.required]
    });
  }

  closeModal() {
    this.viewModal = false;
    this.close.emit();
  }

  onSubmit() {

  }

}
