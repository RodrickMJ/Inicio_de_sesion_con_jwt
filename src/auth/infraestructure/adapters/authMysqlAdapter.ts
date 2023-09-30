import { AuthCredential } from "../../domain/entities/authCredential";
import { AuthRepository } from "../../domain/interfaces/authRepository";

export class AuthMysqlAdapterRepository implements AuthRepository{
    
    // verifyUser(credentials: AuthCredential): Promise<AuthCredential | null> {
    //     let sql = "SELECT * FROM users where email = ?";
    //     let params = [credentials.email];

    //     //let user = query.execute(sql,params);

    //     return AuthCredential;
    // }

    verifyUser(credentials: AuthCredential): Promise<AuthCredential | null> {
        throw new Error("Method not implemented.");
    }

    

} 