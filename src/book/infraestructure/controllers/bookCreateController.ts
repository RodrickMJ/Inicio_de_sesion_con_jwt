import { Request, Response } from "express";
import { CreateBookUseCase } from "../../application/use-cases/authUseCase";

export class BookCreateController {

    constructor(readonly createBookUseCase:CreateBookUseCase){}

    async run(request:Request,response:Response) {
        
        try {
            let {email,password} = request.body;

            let authentication = await this.createBookUseCase.execute(email,password);

            return response.status(200)
                .json(authentication);

        }catch(error:any) {
            response.status(error.http_status ?? 500)
                .json({
                    message:"error while authenticating",
                    error:error
                })
        }

    }

}