import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/books.service';
import { Issue } from 'src/app/Issue';

@Component({
  selector: 'app-manager-view',
  templateUrl: './manager-view.component.html',
  styleUrls: ['./manager-view.component.css'],
})
export class ManagerViewComponent implements OnInit {
  id: number;
  message: string = '';
  constructor(private bookservice: BooksService, private router: Router) {}

  ngOnInit(): void {
    if (!(sessionStorage.length > 0)) {
      this.router.navigateByUrl('/login');
    }
  }

  delete(id: number) {
    this.bookservice.checkin(id).subscribe((issue: Issue) => {
      if (issue) {
        console.log('Request made, ', issue);
        this.message = 'Request has been made successfully';
      } else {
        this.message = 'Request unsuccessed ';
      }
    });
  }
  logOut() {
    alert('You are logging out!!');
    sessionStorage.clear();
    this.router.navigateByUrl('');
  }
}
