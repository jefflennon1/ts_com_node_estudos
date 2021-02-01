import { getRepository } from "typeorm";
import User from "../models/User";

import { hash } from 'bcryptjs';

interface Request{
  name:string;
  email:string,
  password:string;
}

export default class CreateUsersService{
  public async execute({name, email, password}: Request):Promise<User>{
    const usersRepository = getRepository(User);
    const findByEmail = await usersRepository.findOne({
      where:{email}
    })

    if(findByEmail){
      throw new Error('Email address already used.')
    }
    const hashPassowd = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashPassowd
    });

   await usersRepository.save(user);
    return user;
  }
}
