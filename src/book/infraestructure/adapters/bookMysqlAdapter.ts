import { Book } from "../../domain/entities/book";
import { BookRepository } from "../../domain/interfaces/bookRepository";

export class BookMysqlAdapterRepository implements BookRepository{
    createBook(credentials: Book): Promise<Book | null> {
        throw new Error("Method not implemented.");
    } 

} 