import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Film } from './../../../shared/models/film.model';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css'],
})
export class EditModalComponent implements OnInit {
  @Input() viewEditModal: boolean = false;
  @Input() film!: Film;
  @Output() close = new EventEmitter();
  @Output() filmChanged = new EventEmitter();

  editForm!: FormGroup;
  viewVerificationModal: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.getFormValues();
  }

  getFormValues() {
    this.editForm = this.fb.group({
      title: [
        this.film?.title,
        [Validators.required, Validators.maxLength(35)],
      ],
      rating: [
        this.film.vote_average?.toFixed(1),
        [Validators.required, Validators.min(0), Validators.max(10)],
      ],
      category: [this.film?.genres, Validators.required],
      releaseDate: [this.film?.release_date, Validators.required],
      overview: [this.film?.overview, Validators.required],
    });
  }

  closeModal() {
    this.viewEditModal = false;
    this.close.emit();
  }

  onSubmit(): void {
    console.log("form: ", this.editForm);
    if (this.editForm.valid) {
      this.sendChanges();
      this.closeModal();
    } else {
      this.editForm.markAllAsTouched();
    }
  }

  sendChanges() {
    const filmEdited = {
      title: this.editForm.get('title')?.value,
      rating: this.editForm.get('rating')?.value,
      overview: this.editForm.get('overview')?.value,
    };
    this.filmChanged.emit(filmEdited);
  }

  navigateToDetail(film: any): void {
    const filmDeleted = {
      id: film.id,
      isDeleted: true,
    };

    this.router.navigate(['/'], { state: { filmDeleted } });
  }

  /* delete modal functions */

  viewwDeleteFilm() {
    this.viewVerificationModal = true;
  }

  closeDeleteModal() {
    this.viewVerificationModal = false;
  }
}
