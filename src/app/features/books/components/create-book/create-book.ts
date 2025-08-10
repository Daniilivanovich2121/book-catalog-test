import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-create-book',
  imports: [
    MatDialogContent,
    MatFormField,
    MatLabel,
    MatDialogActions,
    MatInput,
    ReactiveFormsModule,
    MatButton,
    MatError,
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
  pages: ['', Validators.required],
  language: ['', Validators.required],
})
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.createBookForm.value);
    }
}
