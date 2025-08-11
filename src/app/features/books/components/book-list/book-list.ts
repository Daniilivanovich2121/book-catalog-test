import {ChangeDetectionStrategy, Component, computed, inject, signal} from '@angular/core';
import {BookService} from '../../services/book-service';
import {BookCard} from '../book-card/book-card';
import {BookSearch} from '../book-search/book-search';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {Book} from '../../models/book.model';
import {MatDialog} from '@angular/material/dialog';
import {CreateBook} from '../create-book/create-book';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-book-list',
  imports: [
    BookCard,
    BookSearch,
    MatProgressSpinner,
    MatIcon,
    MatButton
  ],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class BookList {
  bookService = inject(BookService);
  dialog = inject(MatDialog);

  bookState = this.bookService.bookState;
  searchTerm = signal('');

  filteredBooks = computed(() => this.bookService.filterBooks(this.searchTerm()));

  bookInfo(book: Book) {
    this.bookService.navigateToBookInfo(book)
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateBook, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe((result: Book) => {
      if (result) {
        this.bookService.createBook(result);
      }
    });
  }
}
