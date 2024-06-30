import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Film } from './../../../shared/models/film.model';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  @Input() viewEditModal: boolean = false;
  @Input() film!: Film;
  @Output() close = new EventEmitter();

  editForm!: FormGroup;
  viewVerificationModal: boolean = false;
  

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getFormValues();
    //console.log("film en edit: ", this.film);
    //console.log("editForm ", this.editForm);
  }

  getFormValues() {
    this.editForm = this.fb.group({
      title: [this.film?.title, Validators.required],
      rating: [this.film.vote_average?.toFixed(1) , Validators.required],
      category: ["", Validators.required],
      overview: [this.film?.overview, Validators.required]
    });
  }

  closeModal() {
    this.viewEditModal = false;
    this.close.emit();
  }

  onSubmit(): void{
    if (this.editForm.valid) {
      // Aquí puedes manejar la lógica para enviar los datos del formulario
      console.log("hello", this.editForm.value);
      // Por ejemplo, puedes llamar a un servicio para guardar los datos
      // this.productService.saveProduct(this.productForm.value);
      //this.closeModal();
    } else {
      // Marcar todos los campos como tocados para mostrar los errores de validación
      console.log("wow");
      this.editForm.markAllAsTouched();
    }
  }

  /* delete modal functions */

  deleteFilm() {
    this.viewVerificationModal = true; 
  }

  closeDeleteModal() {
    this.viewVerificationModal = false; 
  }
}
