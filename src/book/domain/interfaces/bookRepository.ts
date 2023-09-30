import { Book } from "../entities/book";

export interface BookRepository {
    createBook(credentials:Book):Promise<Book|null>;
}