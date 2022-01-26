export class Book {
    title: string;
    author: string;
    isbn: number;
    image: string;
    bookID:number;
    description:string;
    pages:number;
    language:string;
    constructor() {
        this.title = "";
        this.author = "";
        this.isbn = 0;
        this.image = "";
        this.description = "";
        this.language = "";
        this.bookID=0;
        this.pages=0;
    }
}