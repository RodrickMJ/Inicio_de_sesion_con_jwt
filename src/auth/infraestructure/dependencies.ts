import { AuthUseCase } from "../application/use-cases/authUseCase";
import { AuthMysqlAdapterRepository } from "./adapters/authMysqlAdapter";
import { AuthController } from "./controllers/authController";


const authMysqlAdpater = new AuthMysqlAdapterRepository();
const authUseCase      = new AuthUseCase(authMysqlAdpater);
export const authController = new AuthController(authUseCase);