import { getRepository } from "typeorm";
import User from "../models/User";

interface Request{
  user_id: string;
  avatar: string;
}

class ChangeAvatarUserService{
  async execute({ user_id, avatar }:Request):Promise<void>{
    const userRepository = await getRepository(User);
    const user = await userRepository.findOne(user_id);
      if(!user){
        throw new Error('any users validates!')
      }
     if(user.avatar){

     }
  }
}

export default ChangeAvatarUserService;