import { Request, Response } from "express";
import { AuthUseCase } from "../../application/use-cases/authUseCase";

export class AuthController {

    constructor(readonly authUseCase:AuthUseCase){}

    async run(request:Request,response:Response) {
        
        try {
            let {email,password} = request.body;

            let authentication = await this.authUseCase.execute(email,password);

            return response.status(200)
                .json(authentication);

        }catch(error:any) {
            console.log(error);
            response.status(error.http_status ?? 500)
                .json({
                    message:"error while authenticating",
                    error:error
                })
        }

    }

}