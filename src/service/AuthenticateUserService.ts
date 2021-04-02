import { compare } from "bcryptjs";
import { getRepository } from "typeorm";
import User from "../models/User";
import { sign } from 'jsonwebtoken';
import AppError from '../errors/AppError'

interface Request{
  email: string;
  password: string;
}
interface Response{
  user: User;
  token: string,
}
export default class AuthenticateUserService{
    public async execute({email, password}: Request): Promise<Response>{
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({
            where: { email }
          });

        if(!user){
          throw new AppError('Incorrect email/password combination!', 401);
        }
        const passwordMatched = await compare(password, user.password);

        if(!passwordMatched){
          throw new AppError('Incorrect email/password combination!', 401);
        }

        //Passou daqui quer dizer que o usuário está autenticado!
        const token = sign({}, 'ca06312c68ad5be39b62264fce05bec0', {
          subject : user.id,
          expiresIn : '1d',
        })
        return{
          user,
          token
        }
    }
}
