import {ChangeDetectionStrategy, Component, EventEmitter, model, output, Output, signal} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-book-search',
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatIconButton,
    MatIcon,
    NgIf,
    FormsModule
  ],
  templateUrl: './book-search.html',
  styleUrl: './book-search.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookSearch {
  searchTerm = model.required<string>()
}
