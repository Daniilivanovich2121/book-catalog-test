import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle, MatCardTitle
} from '@angular/material/card';
import {Book} from '../../models/book.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-book-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    DatePipe,
    MatCardSubtitle,
    MatCardTitle,
  ],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCard {
    book = input.required<Book>()
}
