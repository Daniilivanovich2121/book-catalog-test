import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../models/book.model';
import {catchError, EMPTY, finalize} from 'rxjs';
import {Router} from '@angular/router';
import {CreateBook} from '../components/create-book/create-book';

export interface BookStateModel {
  isLoading: boolean;
  books: Book[];
  error: any;
}

export const BOOK_INITIAL_STATE: BookStateModel = {
  isLoading: false,
  books: [],
  error: null,
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly http = inject(HttpClient);
  private readonly state = signal<BookStateModel>(BOOK_INITIAL_STATE);
  private readonly router = inject(Router);
  bookState = computed(() => this.state())

  constructor() {
    this.getBooks()
  }

  getBooks(): void {
    this.setState({isLoading: true});
    this.http.get<Book[]>('assets/books.json').pipe(
      finalize(() => this.setState({isLoading: false})),
      catchError((error) => {
        this.setState({error: error});
        return EMPTY;
      })
    ).subscribe(response => {
      this.setState({
        books: response,
        error: null
      });
    });
  }

  createBook(newBook: Book): void {
    const book = {
      ...newBook,
      id: this.generateId()
    };
    this.setState({
      books: [book,...this.bookState().books]
    });
  }

  filterBooks(searchTerm: string): Book[] {
    if (!searchTerm) {
      return this.state().books;
    }
    const term = searchTerm.toLowerCase();
    return this.state().books.filter(book =>
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term)
    );
  }

  private setState(partialState: Partial<BookStateModel>): void {
    const newState = {...this.state(), ...partialState};
    this.state.set(newState);
  }

  navigateToBookInfo(book: Book) {
    this.router.navigate(['books', book.id]);
  }
  private generateId(): number {
    return Math.floor(Math.random() * 1000000);
  }
}
