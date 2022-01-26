import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddBookComponent } from './libraryManager/add-book/add-book.component';

import { UsersService } from './users.service';
import { ViewBooksComponent } from './user/view-books/view-books.component';
import { ViewBookComponent } from './user/view-book/view-book.component';
import { BookRequestToSupplierComponent } from './libraryManager/book-request-to-supplier/book-request-to-supplier.component';
import { IssueRequestsComponent } from './libraryManager/issue-requests/issue-requests.component';
import { SupplierviewComponent } from './supplierview/supplierview.component';
import { ManagerViewComponent } from './libraryManager/manager-view/manager-view.component';
import { NgxPrintModule } from 'ngx-print';
// import { SupplierdisplayComponent } from './supplierdisplay/supplierdisplay.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddBookComponent,
    ViewBooksComponent,
    ViewBookComponent,
    BookRequestToSupplierComponent,
    IssueRequestsComponent,
    SupplierviewComponent,
    ManagerViewComponent,
    // SupplierdisplayComponent,
    
    // UserViewComponent,
    // UserviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPrintModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
