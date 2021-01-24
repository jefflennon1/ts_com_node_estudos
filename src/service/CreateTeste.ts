import { getCustomRepository } from "typeorm";
import Teste from "../models/Teste";
import TesteRepository from "../repository/TesteRepository";

interface Request{
  pessoa_nome: string;
}

export default class CreateTeste{
      public async create({pessoa_nome}: Request):Promise<Teste>{
        const testeRepository = getCustomRepository(TesteRepository);
          const teste = await testeRepository.create({
            pessoa_nome,
          })

          testeRepository.save(teste);
          return teste;
      }
}
