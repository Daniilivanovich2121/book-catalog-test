import {ChangeDetectionStrategy, Component, inject, OnInit, input} from '@angular/core';
import {BookDetailService} from '../../services/book-detail.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {DatePipe} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-book-detail',
  imports: [
    MatCardModule,
    MatButtonModule,
    DatePipe,
    MatIconModule,
    RouterModule,
    MatProgressSpinner
  ],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class BookDetail implements OnInit {
  bookDetailService = inject(BookDetailService);
  selectedBook =  this.bookDetailService.selectedBook

  bookId = input.required<string>()

  ngOnInit() {
    this.bookDetailService.setBookId(Number(this.bookId()));
  }

}
