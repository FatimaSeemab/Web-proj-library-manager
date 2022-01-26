import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  message: string = '';
  loginUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    title: '',
    personID: 0,
  };
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void { }

  SignIn(form: { value: User }) {
    this.usersService.loginUser(form.value).subscribe((user: User) => {
      if (!user) {
        this.message = 'invalid username or password';
      } else {
        this.loginUser = user;
        sessionStorage.setItem('loggedInUser', JSON.stringify(this.loginUser));
        this.message =
          ' Welcome ' +
          this.loginUser.firstName +
          ' ' +
          this.loginUser.lastName +
          '!';
        if (this.loginUser.title === 'S' || this.loginUser.title === 'F') {
          this.router.navigateByUrl('/viewBooks');
        } else if (this.loginUser.title === 'A') {
          this.router.navigateByUrl('/Manager');
        } else {
          this.router.navigateByUrl('/Supplier');
        }
      }
    });
  }
}
