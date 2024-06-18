import { inject } from 'inversify';
import 'reflect-metadata';
import { userService } from '../services';
import { controller, httpDelete, httpGet, httpPost } from 'inversify-express-utils';
import { Request, Response } from 'express';

@controller('/user')
export class userController{
    constructor(@inject(userService) private userServices: userService){}

    @httpPost('/addUser')
    async addUser(req: Request, res: Response){
        try{
            const bodyData = req.body;
            res.send(await this.userServices.addUser(bodyData));
        }catch(err:any){
            res.send(err.message);
        }
    }

    @httpDelete('/deleteUser')
    async deleteUser(req: Request, res: Response){
        try{
            const userId = req.query.userId;
            res.send(await this.userServices.deleteUser(parseInt(userId as string)));
        }catch(err:any){
            res.send(err.message);
        }
    }

    @httpGet('/getAllUser')
    async getAllUser(req: Request, res: Response){
        try{
            res.send(await this.userServices.getAllUsers());
        }catch(err:any){
            res.send(err.message);
        }
    }

    @httpGet('/getUser')
    async getUser(req: Request, res: Response){
        try{
            const userId = req.params.userId as string;
            console.log(userId);
            // res.send(await this.userServices.getUser(parseInt(userId as string)));
        }catch(err: any){
            res.send(err.message);
        }
    }
}