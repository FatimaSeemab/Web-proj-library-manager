import { Component, OnInit } from '@angular/core';
import { BooksService} from '../../books.service';
import { Book } from '../../Book';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  message:string="";
  book:Book={ title:"" , author:"", isbn: 0, image:"",bookID:0, description:"",language:"",pages:0}
  myForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    author: new FormControl('', [Validators.required, Validators.minLength(3)]),
    isbn: new FormControl('', [Validators.required, Validators.minLength(13)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    language: new FormControl('', [Validators.required, Validators.minLength(3)]),
    pages: new FormControl('', [Validators.required, Validators.minLength(2)]),
    uploadfile: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private booksService: BooksService, private http:HttpClient,private router:Router) { }
      
  get f(){
    return this.myForm.controls;
  }
     
  onFileChange(event:any) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }

  ngOnInit(): void {
    if(!(sessionStorage.length >0))
    {
    this.router.navigateByUrl('/login')
    }
  }

  submit(){
    const formData = new FormData();
    formData.append('file', this.myForm!.get('fileSource')!.value);
    formData.append('title', this.myForm!.get('title')!.value);
    formData.append('author', this.myForm!.get('author')!.value);
    formData.append('isbn', this.myForm!.get('isbn')!.value);
    formData.append('description', this.myForm!.get('description')!.value);
    formData.append('language', this.myForm!.get('language')!.value);
    formData.append('pages', this.myForm!.get('pages')!.value);

    this.http.post('http://localhost:80/library/upload.php', formData, )
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }

}
