import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../User';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User= {firstName: "", lastName:"", email:"", password:"", title: "",personID:0};
  message:string;
  constructor(private userService: UsersService,private router:Router) { }

  ngOnInit(): void {
    if(!(sessionStorage.length >0))
    {
    this.router.navigateByUrl('/login')
    }
  }

  register(form: { value: User;}){
    this.userService.registerUser(form.value).subscribe((user: User)=>{
      console.log("User registered, ", user);
    });
    this.message = "User registered";
  }
}
