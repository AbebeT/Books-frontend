import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../../model/book";
import {BookServiceService} from "../../../service/book-service.service";
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  editClicked : boolean = false;

  book: Book;
  constructor(private service : BookServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params['id']);
    console.log("book - item id: ", id);
    this.service.getDataById(id).subscribe( data => this.book = data);

  }

  onEdit(id: number) {
    this.editClicked = !this.editClicked;
    console.log("onEdit", this.editClicked);

  }

  onRemove(id: number) {

  }

  toDate(dateSent: string){
    let currentDate = new Date();
   let dateSentConverted = new Date(dateSent);

    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSentConverted.getFullYear(), dateSentConverted.getMonth(), dateSentConverted.getDate()) ) /(1000 * 60 * 60 * 24));

  }
}
