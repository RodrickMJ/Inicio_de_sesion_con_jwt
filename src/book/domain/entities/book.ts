import { IsNotEmpty,Length } from "class-validator";

export class Book {

    @IsNotEmpty()
    public title:string;

    @IsNotEmpty()
    @Length(7,13)
    public author:string;
    
    constructor(title:string,author:string) {
        this.title = title;
        this.author = author;
    }

}