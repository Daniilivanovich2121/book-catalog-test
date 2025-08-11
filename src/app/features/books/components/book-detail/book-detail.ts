import {ChangeDetectionStrategy, Component, inject, OnInit, input} from '@angular/core';
import {BookDetailService} from '../../services/book-detail-service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-book-detail',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatProgressSpinner
  ],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class BookDetail implements OnInit {
  bookId = input.required<string>()
  bookDetailService = inject(BookDetailService);
  selectedBook =  this.bookDetailService.selectedBook

  ngOnInit() {
    this.bookDetailService.setBookId(Number(this.bookId()));
  }

}
