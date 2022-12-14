import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../../model/book';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../../../service/book-service.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  @Input()
  book: Book;

  @Output()
  selectedBookId: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private route: ActivatedRoute,
    private service: BookServiceService
  ) {}

  paramId: number;

  ngOnInit(): void {}
  onDetails(id: number) {
    this.selectedBookId.emit(id);
  }
}
