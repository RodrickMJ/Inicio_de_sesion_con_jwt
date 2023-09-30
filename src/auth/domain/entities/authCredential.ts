import { IsNotEmpty,Length } from "class-validator";

export class AuthCredential {

    @IsNotEmpty()
    public email:string;

    @IsNotEmpty()
    @Length(7,13)
    public password:string;
    
    constructor(email:string,password:string) {
        this.email = email;
        this.password = password;
    }

}