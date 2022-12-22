import { Router } from '@angular/router';
import { BookServiceService } from './../../../../service/book-service.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
})
export class BookEditComponent implements OnInit {

  @Input()
  book: Book;

  @Output()
  updateClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  cancelClicked: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    summary: new FormControl(''),
    rating: new FormControl(),
  });
  constructor(private service: BookServiceService, private router: Router) {}

  ngOnInit(): void {
    this.form.setValue({
      title: this.book.title,
      rating: this.book.rating,
      summary: this.book.summary,
    });
  }

  onCancel() {
    this.cancelClicked.emit(true);
  }

  onSubmit(value: Book) {
    this.updateClicked.emit(true);

    let booktemp: Book = JSON.parse(JSON.stringify(this.book));
    booktemp.summary = value.summary;
    booktemp.title = value.title;
    booktemp.rating = value.rating;
    this.service
      .updateBookRecord(booktemp)
      .subscribe((data) => {
        (this.book = data);
        this.reloadCurrentRoute();
        this.router.navigate(["/books", this.book.id])
      });
  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}
}
