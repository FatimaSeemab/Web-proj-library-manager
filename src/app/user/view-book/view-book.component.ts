import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/Book';
import { Issue } from 'src/app/Issue';
import { BooksService } from '../../books.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
})

export class ViewBookComponent implements OnInit {
  book: Book;
  // number:2;
  bookIssue: Issue = { stdID: 0, bookID: 0 };
  title: boolean = false;
  message: string = '';
  constructor(private booksService: BooksService, private router: Router) {}

  ngOnInit(): void {
    if (!(sessionStorage.length > 0)) {
      this.router.navigateByUrl('/login');
    }
    this.title =
      JSON.parse(sessionStorage.getItem('loggedInUser')||"").title != 'A';
    this.book = this.booksService.book;
  }
  issue() {
    this.bookIssue.stdID = JSON.parse(
      sessionStorage.getItem('loggedInUser')||""
    ).personID;
    //  console.log(this.bookIssue.stdID);

    this.bookIssue.bookID = this.booksService.book.bookID;
    //  console.log(this.bookIssue.bookID);
    this.booksService
      .issueBook(this.bookIssue)
      .subscribe((bookissue: Issue) => {
        // console.log("Request Submitted, ", bookissue);
        if (bookissue) {
          this.message = 'Your request was submitted successfully';
        } else {
          this.message = 'Your request is not submitted';
        }
      });
  }
}
