import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {BookServiceService} from "../../service/book-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books : Book[] ;
  removeId: number;
  editId: number;

  constructor(private bookService: BookServiceService
  ,private router: Router) { }

  ngOnInit(): void {
    this.bookService.getData().subscribe(
      data => this.books = data
    )
  }

  handleEdit(id: number | any) {
    this.editId = id;
    console.log("from parent: id, ", this.editId);
  }

  handleRemove(id: number | any) {
    this.removeId = id;
    console.log("from parent: id, ", this.removeId);
  }

  onSelect(id: number | any) {
    this.router.navigate(['/books', id]);
  }
}
