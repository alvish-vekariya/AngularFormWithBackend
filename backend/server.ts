import 'reflect-metadata';
import { connection } from "./db";
import express from 'express';
import {InversifyExpressServer} from 'inversify-express-utils';
import container from './inversfiy config/inversfiy.config';
import config from 'config';
import './controllers';
import cors from 'cors';

const server = new InversifyExpressServer(container);
server.setConfig(app=>{
    app.use(express.json())
    app.use(cors({
        origin : "http://localhost:4200",
        credentials : true
    }))
})

const app = server.build();
const port = config.get("PORT") || 3000;
app.listen(port,()=>{
    console.log(`Server is connected on ${port}!!`);
    try{
        connection().then(()=>console.log('Database is connected!!'));
    }catch(err: any){
        console.log(err.message);
    }
})

