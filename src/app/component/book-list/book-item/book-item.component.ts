import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../../model/book';
import { BookServiceService } from '../../../service/book-service.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent implements OnInit {

  isUserLoggedIn: boolean;
  editClicked: boolean = false;

  book: Book;
  constructor(
    private service: BookServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<{ isLoggedIn: { isLoggedIn: boolean } }>
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params['id']);
    this.service.getDataById(id).subscribe((data) => (this.book = data));
    this.store.select('isLoggedIn').subscribe((data) => {
    this.isUserLoggedIn = data.isLoggedIn;
    });
  }

  onEdit() {
    this.editClicked = !this.editClicked;
  }
  toDate(dateSent: string) {
    let currentDate = new Date();
    let dateSentConverted = new Date(dateSent);

    return Math.floor(
      (Date.UTC(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
      ) -
        Date.UTC(
          dateSentConverted.getFullYear(),
          dateSentConverted.getMonth(),
          dateSentConverted.getDate()
        )) /
        (1000 * 60 * 60 * 24)
    );
  }

  OnUpdateButtonClicked() {
    this.editClicked = false;
  }

  onRemove(id: number) {
    this.service.deleteBookById(id).subscribe();
    this.navigateToBooks();
  }

  onCancelButtonClicked() {
    this.editClicked = false;
  }

  navigateToBooks() {
    this.router.navigate(['/books'])
    .then(()=>{
      window.location.reload();
    });
  }
}
