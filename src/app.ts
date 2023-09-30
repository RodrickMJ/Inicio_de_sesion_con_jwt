import express from "express";
import dotenv from "dotenv";
import { Signale } from "signale";

const app = express();
const signale = new Signale();

app.use(express.json());

dotenv.config();

var PORT = process.env.SERVER_PORT || 3001;

async function server() {
    try {

        //routes instances

        app.listen(PORT, () => {
            signale.success(`Server run in port ${PORT}`);
        });
       

    }catch(error:any){
        signale.error(`Error to instance the server in port: ${PORT}, exception: ${error.message()}`)
    }
}

server();