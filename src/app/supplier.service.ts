import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from  'rxjs';
import {User} from './User';
import { Supply } from './supply';
@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private httpClient:HttpClient) { }
  getSupplier(): Observable<User[]>{
    return this.httpClient.get<User[]>('http://library-project.epizy.com/Library/viewSupplier.php');
  }
  supplyBook(supply: Supply): Observable<Supply>{
    return this.httpClient.post<Supply>('http://library-project.epizy.com/Library/supplyRequest.php',supply);
  }
  displayrequest(id:Number): Observable<Supply[]>{
    console.log(id);
    return this.httpClient.get<Supply[]>('http://library-project.epizy.com/Library/displayRequest.php?id='.concat(id.toString()));
  
  }
}