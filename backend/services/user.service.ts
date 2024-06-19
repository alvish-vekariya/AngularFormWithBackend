import { injectable } from "inversify";
import { userModel } from "../models";

@injectable()
export class userService{
    async addUser(bodyData:any){
        await userModel.create(bodyData);
        return {'message' : "user is created!!", status: true};
    }

    async deleteUser(userId: number){
        await userModel.findOneAndDelete({userId : userId});
        return {'message': 'user is deleted!!', status: true};
    }

    async getAllUsers(){
        const data = await userModel.find({});
        return data;
    }

    async getUser(userId: number){
        const data = await userModel.findOne({userId : userId});
        return data;
    }

    async updateUser(userId: number, bodyData: any){
        await userModel.updateOne({userId: bodyData.userId},{$set :{
            username: bodyData.username,
            addresses : bodyData.addresses,
            email : bodyData.email
        }})
        return {status: true, message : 'user updated!!'};
    }
}