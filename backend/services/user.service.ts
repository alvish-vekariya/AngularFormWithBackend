import { injectable } from "inversify";
import { userModel } from "../models";

@injectable()
export class userService{
    async addUser(bodyData:any){
        await userModel.create(bodyData);
        return {'message' : "user is created!!"};
    }

    async deleteUser(userId: number){
        await userModel.findOneAndDelete({userId : userId});
        return {'message': 'user is deleted!!'};
    }

    async getAllUsers(){
        const data = await userModel.find({});
        return data;
    }
}