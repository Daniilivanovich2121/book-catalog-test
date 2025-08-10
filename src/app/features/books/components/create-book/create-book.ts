import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatButton} from '@angular/material/button';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-create-book',
  imports: [
    MatDialogContent,
    MatFormField,
    MatLabel,
    MatDialogActions,
    MatInput,
    ReactiveFormsModule,
    MatCheckbox,
    MatButton,
    MatError,
    MatSelect,
    MatOption,
  ],
  templateUrl: './create-book.html',
  styleUrl: './create-book.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateBook {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef);
  public readonly data = inject(MAT_DIALOG_DATA);

public createBookForm: FormGroup = this.fb.group({
  title:['', Validators.required],
  author: ['', Validators.required],
  description: ['', Validators.required],
  publishedDate: ['', Validators.required],
  genre: ['', Validators.required],
  pages: [0, Validators.required],
  language: ['', Validators.required],
})
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.createBookForm.value);
    }
}
