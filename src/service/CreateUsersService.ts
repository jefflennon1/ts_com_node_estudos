import { getRepository } from "typeorm";
import User from "../models/User";

interface Request{
  name:string;
  email:string,
  password:string;
}

export default class CreateUsersService{
  public async execute({name, email, password}: Request):Promise<User>{
    const usersRepository = getRepository(User);
    const findByEmail = usersRepository.findOne({
      where:{email}
    })

    if(findByEmail){
      throw new Error('Email address already used.')
    }
    const user = usersRepository.create({
      name,
      email,
      password
    })

    usersRepository.save(user);
    return user;
  }
}
