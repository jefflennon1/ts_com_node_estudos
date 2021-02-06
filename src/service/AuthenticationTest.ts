import {compare, hash} from 'bcryptjs';
import { response } from 'express';
import { sign } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import Teste from '../models/Teste';
interface Request{
  pessoa_nome: string,
  password: string;
}
interface Response{
  teste: Teste;
  token: string;
}
export default class AuthenticationTest{
    public async execute({pessoa_nome, password}: Request):Promise<Response>{
      const testRepository = getRepository(Teste);
     const teste = await testRepository.findOne({
        where: {pessoa_nome},
      });
      if(!teste){
        throw new Error('Teste not fount!');
      }
      const testeAuthenticaded = compare(password, teste.password);
      if(!testeAuthenticaded){
        throw new Error('name or password incorrects!');
      }
      // SE PASSOU POR AQUI É PQ SE AUTENTICOU
      const token = sign({}, 'jidihdufhrihgurhuth',{
        subject: password,
        expiresIn: '1d',
      })


      return  {teste, token};
    }
}
