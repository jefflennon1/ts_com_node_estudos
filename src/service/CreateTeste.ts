import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import Teste from "../models/Teste";
import TesteRepository from "../repository/TesteRepository";

interface Request{
  pessoa_nome: string;
  password: string;
}

export default class CreateTeste{
      public async create({pessoa_nome, password}: Request):Promise<Teste>{
        const testeRepository = getCustomRepository(TesteRepository);
          const testeExist = await testeRepository.findOne({
            where: {pessoa_nome}
          })
          if(testeExist){
            throw new Error('person already exist in system');
          }
          const passowrdHash = await hash(password, 8);

          const teste = await testeRepository.create({
            pessoa_nome,
            password: passowrdHash,
          })

          testeRepository.save(teste);
          return teste;
      }
}
