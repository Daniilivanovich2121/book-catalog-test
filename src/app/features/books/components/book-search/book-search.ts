import {ChangeDetectionStrategy, Component, model, } from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-book-search',
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule
  ],
  templateUrl: './book-search.html',
  styleUrl: './book-search.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookSearch {
  searchTerm = model.required<string>()
}
