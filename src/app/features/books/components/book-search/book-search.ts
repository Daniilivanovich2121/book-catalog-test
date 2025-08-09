import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-book-search',
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatIconButton,
    MatIcon,
    NgIf
  ],
  templateUrl: './book-search.html',
  styleUrl: './book-search.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookSearch {
  searchTerm = '';
  @Output() searchChanged = new EventEmitter<string>();

  onSearch() {
    this.searchChanged.emit(this.searchTerm);
  }

  clearSearch() {
    this.searchTerm = '';
    this.searchChanged.emit('');
  }
}
