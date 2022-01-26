import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/books.service';
import { Issue } from 'src/app/Issue';
@Component({
  selector: 'app-issue-requests',
  templateUrl: './issue-requests.component.html',
  styleUrls: ['./issue-requests.component.css'],
})
export class IssueRequestsComponent implements OnInit {
  public requests: any;
  issuerequest: Issue = { bookID: 0, stdID: 0 };
  constructor(private bookservice: BooksService, private router: Router) {}

  ngOnInit(): void {
    if (!(sessionStorage.length > 0)) {
      this.router.navigateByUrl('/login');
    } else {
      this.bookservice.getissueRequest().subscribe((response) => {
        console.log(response);
        this.requests = response;
      });
    }
  }
  issue(id: Number, pid: Number) {
    this.issuerequest.bookID = id;
    this.issuerequest.stdID = pid;
    // console.log(this.issuerequest.bookID,this.issuerequest.stdID);
    this.bookservice.issue_now(this.issuerequest).subscribe((response) => {
      console.log(response);
      this.requests = response;
    });
  }
}
