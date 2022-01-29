import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { User } from  './User';
import { Observable } from  'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
   in:boolean=false;
  constructor(private httpClient: HttpClient) { }

  loginUser(user: User): Observable<User>{
    return this.httpClient.post<User>('http://library-project.epizy.com/Library/login.php', user);
  }


  registerUser(user: User): Observable<User>{
    return this.httpClient.post<User>('http://library-project.epizy.com/Library/login.php', user);
  }
  
}
