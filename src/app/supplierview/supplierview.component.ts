import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierService } from '../supplier.service';
import { User } from '../User';

@Component({
  selector: 'app-supplierview',
  templateUrl: './supplierview.component.html',
  styleUrls: ['./supplierview.component.css'],
})
export class SupplierviewComponent implements OnInit {
  public requests: any;
  public id: number;
  supplier: User= {firstName: "", lastName:"", email:"", password:"", title: "",personID:0};

  constructor(
    private supplierService: SupplierService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!(sessionStorage.length > 0)) {
      this.router.navigateByUrl('/login');
    } 
    else {
      this.supplier = JSON.parse(sessionStorage.getItem('loggedInUser')||"");
      this.id = JSON.parse(sessionStorage.getItem('loggedInUser')||"").personID;
      this.supplierService.displayrequest(this.id).subscribe((response) => {
        console.log(response);
        this.requests = response;
      });
    }
  }
  logOut() {
    alert('You are logging out!!');
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
