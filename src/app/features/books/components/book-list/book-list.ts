import {ChangeDetectionStrategy, Component, computed, inject, OnInit, signal} from '@angular/core';
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
  searchTerm = signal('');

  filteredBooks = computed(() => this.bookService.filterBooks(this.searchTerm()));

  ngOnInit() {
    this.bookService.getBooks()
  }

  onSearch(searchTerm: string) {
    this.searchTerm.set(searchTerm);
  }
}
