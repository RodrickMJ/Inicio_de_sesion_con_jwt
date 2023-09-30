import { validate } from "class-validator";
import { Book } from "../entities/book";

export class BookValidate {

    // atributes
    public book:Book;
    public listErrors:any[];

    //constructor
    constructor(book:Book) {
        this.book = book;
        this.listErrors = [];
    }

    //public methods
    public async invalidIfHasErrors() {
        await this.validate();

        if (!this.foundedErrors()){
            return;
        }

        throw({
            http_status:422,
            validations:this.errors()
        })
    }

    //protected methods
    protected async validate() {
        this.listErrors = await validate(this.book);
    }

    protected errors():any[] {
        return this.listErrors.map((error) => {
            let property = error.property;
            let errorMessages = Object.values(error.constraints);
            return {
                property,
                errorMessages
            }
        });
    }

    protected foundedErrors():boolean {
        return this.listErrors.length > 0;
    }

}