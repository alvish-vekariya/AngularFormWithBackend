import { inject } from 'inversify';
import 'reflect-metadata';
import { userService } from '../services';
import { controller, httpDelete, httpGet, httpPost, httpPut } from 'inversify-express-utils';
import { Request, Response } from 'express';

@controller('/user')
export class userController{
    constructor(@inject(userService) private userServices: userService){}

    @httpPost('/addUser')
    async addUser(req: Request, res: Response){
        try{
            const bodyData = req.body;
            res.json(await this.userServices.addUser(bodyData));
        }catch(err:any){
            res.json({message : err.message, status: false});
        }
    }

    @httpDelete('/deleteUser')
    async deleteUser(req: Request, res: Response){
        try{
            const userId = req.query.userId;
            res.json(await this.userServices.deleteUser(parseInt(userId as string)));
        }catch(err:any){
            res.json({message : err.message, status: false});
        }
    }

    @httpGet('/getAllUser')
    async getAllUser(req: Request, res: Response){
        try{
            res.json(await this.userServices.getAllUsers());
        }catch(err:any){
            res.json({message : err.message, status: false});
        }
    }

    @httpGet('/getUser')
    async getUser(req: Request, res: Response){
        try{
            const userId = req.query.userId as string;
            // console.log(userId);
            res.json(await this.userServices.getUser(parseInt(userId as string)));
        }catch(err: any){
            res.json({message : err.message, status: false});
        }
    }

    @httpPut('/updateUser')
    async updateUser(req: Request, res: Response){
        try{
            const userId = req.query.userId as string;
            const bodyData: any = req.body;
            res.json(await this.userServices.updateUser(parseInt(userId as string), bodyData));
        }catch(err: any){
            res.json({message : err.message, status: false})
        }
    }
}