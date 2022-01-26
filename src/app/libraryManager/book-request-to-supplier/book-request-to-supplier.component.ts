import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../Book';
import { SupplierService } from '../../supplier.service';

import { Supply } from '../../supply';

@Component({
  selector: 'app-book-request-to-supplier',
  templateUrl: './book-request-to-supplier.component.html',
  styleUrls: ['./book-request-to-supplier.component.css'],
})
export class BookRequestToSupplierComponent implements OnInit {
  bookRequest: Supply = { title: '', author: '', supplierID: 0 };

  public suppliers: any;
  ID: Number;
  message: string = '';
  constructor(
    private supplierService: SupplierService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!(sessionStorage.length > 0)) {
      this.router.navigateByUrl('/login');
    } else {
      this.supplierService.getSupplier().subscribe((response) => {
        console.log(response);
        this.suppliers = response;
      });
    }
  }
  supply(form: { value: Supply }) {
    this.supplierService
      .supplyBook(form.value)
      .subscribe((supplybook: Supply) => {
        if (supplybook) {
          console.log('Request made, ', supplybook);
          this.message = 'Request has been made successfully';
        } else {
          this.message = 'Request unsuccessed ';
        }
      });
  }
}
