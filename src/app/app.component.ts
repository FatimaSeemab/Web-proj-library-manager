import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'library';
  
  constructor(private router:Router) { }

  logOut()
  { alert("You are logging out!!");
    sessionStorage.clear();
    this.router.navigateByUrl("/login");

  }
}
