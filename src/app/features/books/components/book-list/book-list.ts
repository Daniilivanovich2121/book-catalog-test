import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import {BookCard} from '../book-card/book-card';
import {BookSearch} from '../book-search/book-search';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-book-list',
  imports: [
    BookCard,
    BookSearch,
    MatProgressSpinner
  ],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookList implements OnInit {
  bookService = inject(BookService);
  bookState = this.bookService.bookState;
  filteredBooks = this.bookService.bookState().books;
  ngOnInit() {
  this.bookService.getBooks()
  }
  onSearch(searchTerm: string) {
    this.filteredBooks = this.bookService.filterBooks(searchTerm);
  }
}
