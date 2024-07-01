import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent implements OnInit {
  @Input() viewCreateModal: boolean = false;
  @Output() close = new EventEmitter();

  createForm: FormGroup = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.maxLength(35)],
    ],
    rating: [
      '',
      [Validators.required, Validators.min(0), Validators.max(10)],
    ],
    category: ['', Validators.required],
    overview: ['', Validators.required],
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.createForm.valid) {
      //this.sendChanges();
      this.closeModal();
    } else {
      // Marcar todos los campos como tocados para mostrar los errores de validación
      this.createForm.markAllAsTouched();
    }
  }

  closeModal() {
    this.viewCreateModal = false;
    this.close.emit();
  }

}
