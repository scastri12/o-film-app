import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css'],
})
export class CreateModalComponent implements OnInit {
  @Input() viewCreateModal: boolean = false;
  @Output() close = new EventEmitter();
  @Output() createdFilm = new EventEmitter();

  createForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(35)]],
    rating: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
    category: ['', Validators.required],
    overview: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.createForm.valid) {
      this.sendChanges();
      this.closeModal();
    } else {
      this.createForm.markAllAsTouched();
    }
  }

  sendChanges() {
    let rand: any = Math.floor(Math.random() * 900) + 1;
    rand = rand.toString();
    const film = {
      id: rand,
      title: this.createForm.get('title')?.value,
      rating: this.createForm.get('rating')?.value,
      overview: this.createForm.get('overview')?.value,
      poster_path: 'http://picsum.photos/2000/3000?r=' + rand,
      created: true,
    };
    this.createdFilm.emit(film);
  }

  closeModal() {
    this.viewCreateModal = false;
    this.createForm.reset();
    this.close.emit();
  }
}
