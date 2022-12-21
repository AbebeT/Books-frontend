import { Router } from '@angular/router';
import { BookServiceService } from './../../service/book-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  form: FormGroup = new FormGroup({
    title: new FormControl(),
    summary: new FormControl(),
    rating: new FormControl(),
    imgSrc: new FormControl()

  });

  constructor(private service: BookServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(value: Book) {
    this.service.addBookRecord(value).subscribe();
    this.navigateToBooks();

  }

  navigateToBooks() {
    this.router.navigate(['/books'])
    .then(()=>{
      window.location.reload();
    });
  }

}
