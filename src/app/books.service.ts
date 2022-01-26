import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Book } from './Book';
import { Issue } from './Issue';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  bookId:any;
  book:any;
  constructor(private httpClient: HttpClient) { }
  getBookId(bookId:any){ 
    this.bookId = bookId;
  }

  getBook(book:any){ 
    this.book = book;
    
  }

  viewBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>('http://localhost:80/library/viewBooks.php');
  }

  issueBook(issue: Issue): Observable<Issue>{
    return this.httpClient.post<Issue>('http://localhost:80/Library/Issued.php', issue);
  }
  
  getissueRequest(): Observable<Issue[]>
  { return this.httpClient.get<Issue[]>('http://localhost:80/library/issuerequests.php');}

  issue_now(issue: Issue){
    return this.httpClient.post<Issue>('http://localhost:80/library/issueParticular.php/',issue);   
  }

  checkin(id: number){
    console.log(id);
    return this.httpClient.delete<Issue>('http://localhost:80/library/checkedIn.php/?id='.concat(id.toString()));
  }
}
