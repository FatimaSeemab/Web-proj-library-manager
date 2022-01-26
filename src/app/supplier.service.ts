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
    return this.httpClient.get<User[]>('http://localhost:80/Library/viewSupplier.php');
  }
  supplyBook(supply: Supply): Observable<Supply>{
    return this.httpClient.post<Supply>('http://localhost:80/library/supplyRequest.php',supply);
  }
  displayrequest(id:Number): Observable<Supply[]>{
    console.log(id);
    return this.httpClient.get<Supply[]>('http://localhost:80/library/displayRequest.php?id='.concat(id.toString()));
  
  }
}