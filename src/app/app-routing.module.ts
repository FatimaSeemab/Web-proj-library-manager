import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddBookComponent } from './libraryManager/add-book/add-book.component';
import { ViewBooksComponent } from './user/view-books/view-books.component';
import { ViewBookComponent } from './user/view-book/view-book.component';
import { BookRequestToSupplierComponent } from './libraryManager/book-request-to-supplier/book-request-to-supplier.component';
import { IssueRequestsComponent } from './libraryManager/issue-requests/issue-requests.component';
import { ManagerViewComponent } from './libraryManager/manager-view/manager-view.component';
import { SupplierviewComponent } from './supplierview/supplierview.component';

const routes: Routes = [
{path:'register', component:RegisterComponent},
{path:'addBook', component:AddBookComponent},
{path:'viewBooks', component:ViewBooksComponent},
{path:'viewBook', component:ViewBookComponent},
{path:'SupplierRequest', component:BookRequestToSupplierComponent},
{path:'SeeRequest', component:IssueRequestsComponent},
{path:'Manager', component:ManagerViewComponent},
{path:'Supplier',component:SupplierviewComponent},
{path:'', component:LoginComponent}];
// {path:"**", component:LoginComponent}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
