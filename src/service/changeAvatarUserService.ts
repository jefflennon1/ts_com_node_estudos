import { getRepository } from "typeorm";
import User from "../models/User";
import UploadConfig from '../config/uploads';
import path from 'path';
import fs from 'fs';

interface Request{
  user_id: string;
  avatar: string;
}

class ChangeAvatarUserService{
  public async execute({ user_id, avatar }:Request):Promise<User>{
    const userRepository = await getRepository(User);
    const user = await userRepository.findOne(user_id);
      if(!user){
        throw new Error('Only  authenticaded users can change avatar');
      }
     if(user.avatar){
       const userAvatarFilePath = path.join(UploadConfig.directory, user.avatar) ;
       const userAvatarExists = await fs.promises.stat(userAvatarFilePath);
       if(userAvatarExists){
         await fs.promises.unlink(userAvatarFilePath);
       }
       user.avatar = avatar;
       await userRepository.save(user);
     }
     return user;
  }
}

export default ChangeAvatarUserService;
