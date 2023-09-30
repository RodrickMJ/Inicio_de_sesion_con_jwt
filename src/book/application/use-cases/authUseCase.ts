import { Book } from "../../domain/entities/book";
import { BookRepository } from "../../domain/interfaces/bookRepository";
import { BookValidate } from "../../domain/validators/bookValidate";

export class CreateBookUseCase {

    constructor(readonly bookRepository:BookRepository){}

    async execute(title:string,author:string):Promise<any|null> {

        let book = new Book(
            title,
            author
        );

        let bookValidate = new BookValidate(book);
        
        await bookValidate.invalidIfHasErrors();

        let createdBook = await this.bookRepository.createBook(book);

        return createdBook;

    }

}