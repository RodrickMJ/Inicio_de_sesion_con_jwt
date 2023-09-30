import { AuthCredential } from "../../domain/entities/authCredential";
import { AuthRepository } from "../../domain/interfaces/authRepository";
import { AuthValidate } from "../../domain/validators/authValidate";
import { generateToken } from "../jwt/auth";

export class AuthUseCase {

    constructor(readonly authRepository:AuthRepository){}

    async execute(email:string,password:string):Promise<any|null> {

        let credentials = new AuthCredential(
            email,
            password
        );

        let authValidate = new AuthValidate(credentials);
        
        await authValidate.invalidIfHasErrors();

        let user = await this.authRepository.verifyUser(credentials);

        if (!user) {
            this.invalidCredentialsTrhow();
        }

        let token = await generateToken(user?.email);

        return {
            user,
            token
        };

    }


    private invalidCredentialsTrhow() {
        throw ({
            http_status: 401,
            errors: [
                {
                    property: "credentials",
                    messages: [
                        "Invalid credentials"
                    ]
                }
            ]
        });
    }
}