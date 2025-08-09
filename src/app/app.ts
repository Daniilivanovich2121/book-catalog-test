import { Component } from '@angular/core';
import {BookList} from './features/books/components/book-list/book-list';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BookList
  ],
  templateUrl: './app.html',
})
export class App {
}
