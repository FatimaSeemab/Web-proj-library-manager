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
    return this.httpClient.get<Book[]>('http://library-project.epizy.com/Library/viewBooks.php');
  }

  issueBook(issue: Issue): Observable<Issue>{
    return this.httpClient.post<Issue>('http://library-project.epizy.com/Library/Issued.php', issue);
  }
  
  getissueRequest(): Observable<Issue[]>
  { return this.httpClient.get<Issue[]>('http://library-project.epizy.com/Library/issuerequests.php');}

  issue_now(issue: Issue){
    return this.httpClient.post<Issue>('http://library-project.epizy.com/Library/issueParticular.php/',issue);   
  }

  checkin(id: number){
    console.log(id);
    return this.httpClient.delete<Issue>('http://library-project.epizy.com/Library/checkedIn.php/?id='.concat(id.toString()));
  }
}
