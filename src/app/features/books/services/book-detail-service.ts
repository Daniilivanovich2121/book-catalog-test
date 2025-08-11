import {computed, inject, Injectable, signal} from '@angular/core';
import {BookService} from './book-service';

@Injectable({
  providedIn: 'root'
})
export class BookDetailService {
  private readonly bookService = inject(BookService);

  selectedBookId = signal<undefined | number>(undefined)

  selectedBook = computed(() =>
    this.bookService.bookState().books.find(book => book.id === this.selectedBookId()))

  setBookId(id: number) {
    this.selectedBookId.set(id)
  }

}
