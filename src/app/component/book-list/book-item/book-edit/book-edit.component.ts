import { BookServiceService } from './../../../../service/book-service.service';
import { Component, Input, OnInit } from '@angular/core';
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

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    summary: new FormControl(''),
    rating: new FormControl(),
  });
  constructor(private service: BookServiceService) {}

  ngOnInit(): void {
    console.log('book on edit', this.book);
    this.form.setValue({
      title: this.book.title,
      rating: this.book.rating,
      summary: this.book.summary,
    });
  }

  onSubmit() {
    console.log("onEdit: ", this.form.value);
    
  }
}
