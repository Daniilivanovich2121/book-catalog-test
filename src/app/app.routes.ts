import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'books',
    loadComponent: () => import('./features/books/components/book-list/book-list'),
  },
  {
    path: 'books/:bookId',
    loadComponent: () => import('./features/books/components/book-detail/book-detail'),
  },
  {
    path: '**',
    redirectTo: 'books',
    pathMatch: 'full',
  }
];
