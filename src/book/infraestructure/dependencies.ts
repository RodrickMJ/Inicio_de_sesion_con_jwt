import { CreateBookUseCase } from "../application/use-cases/authUseCase";
import { BookMysqlAdapterRepository } from "./adapters/bookMysqlAdapter";
import { BookCreateController } from "./controllers/bookCreateController";


const mysqlBookadapter            = new BookMysqlAdapterRepository();
const createBookUseCase           = new CreateBookUseCase(mysqlBookadapter);
export const bookCreateController = new BookCreateController(createBookUseCase);