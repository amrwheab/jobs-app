import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Jop } from '../../interfaces/Jop';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { applyForAJop } from '../../store/jops/jops.actions';

@Component({
  selector: 'app-show-jop',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './show-jop.component.html',
  styleUrl: './show-jop.component.scss'
})
export class ShowJopComponent {

  form!: FormGroup;
  showDetails = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Jop,
    private fb: FormBuilder,
    private store: Store
  ) {}

  ngOnInit(): void {
  this.form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    country: ['', Validators.required],
    education: ['', Validators.required],
    currentPosition: ['', Validators.required],
    company: ['', Validators.required],
    CV: [null, Validators.required],
    coverLetter: [null, Validators.required]
  });
}

onFileChange(event: any, field: any) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    if (file.size <= 3000000) {
      this.form.patchValue({
        [field]: file
      });
    } else {
      alert('File size should be less than 3MB');
    }
  }
}

onSubmit() {
  if (this.form.valid) {
    this.store.dispatch(applyForAJop({id: this.data.id}));
    const toast = document.getElementById('toast');
    toast?.classList.remove('hidden');
    toast?.classList.add('visible');

    setTimeout(() => {
        toast?.classList.remove('visible');
        toast?.classList.add('hidden');
    }, 3000);
    this.showDetails = true;
    const newData = {...this.data};
    newData.applied = true;
    this.data = newData;
  } else {
    console.log('Form is invalid');
  }
}

disApply(): void {
  this.store.dispatch(applyForAJop({id: this.data.id}));
  const newData = {...this.data};
  newData.applied = false;
  this.data = newData;
}
}
