import { getCustomRepository } from "typeorm";
import Pessoas from "../models/Pessoas";
import PessoasRepository from "../repository/PessoasRepository";

interface Request{
  nome: String;
  sobrenome: String;
  idade: BigInteger;
}

export default class CreatePessoaService{
     public async execute({nome, sobrenome, idade}: Request):Promise<Pessoas>{
       const pessoaRepository = getCustomRepository(PessoasRepository);
       const pessoa = await pessoaRepository.create({
         nome,
         sobrenome,
        idade
       })
       pessoaRepository.save(pessoa);
       return pessoa;
     }
}
