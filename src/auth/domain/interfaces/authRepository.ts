import { AuthCredential } from "../entities/authCredential";

export interface AuthRepository {
    verifyUser(credentials:AuthCredential):Promise<AuthCredential|null>;
}