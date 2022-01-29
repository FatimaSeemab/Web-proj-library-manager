import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/Book';
import { BooksService} from '../../books.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {

  books:any;
  title:boolean= false;

  constructor(private booksService: BooksService,private router:Router) { }

  ngOnInit(): void {
    if(!(sessionStorage.length >0))
    {
    this.router.navigateByUrl('/login')
    }
    else{
    this.title = JSON.parse(sessionStorage.getItem("loggedInUser")||"").title != "A";
    this.books = this.booksService.viewBooks();
    }
  }
  setBook(book: Book){
    this.booksService.getBook(book);
  }
  logOut()
  { alert("You are logging out!!");
    sessionStorage.clear();
    this.router.navigateByUrl("");

  }
}
