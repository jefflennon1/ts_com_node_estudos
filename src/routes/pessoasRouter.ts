import { response, Router } from "express";
import { getCustomRepository } from "typeorm";
import PessoasRepository from "../repository/PessoasRepository";
import CreatePessoaService from "../service/CreatePessoaService";

const pessoaRouter = Router();

pessoaRouter.get('/', async (request, response)=>{
  const pessoaRepository = getCustomRepository(PessoasRepository);
  const pessoas = await pessoaRepository.find();

  return response.json(pessoas);
});

pessoaRouter.post('/create', async(request, response)=>{
     try{
        const { nome, sobrenome, idade } = request.body;
      const createPessoaService = new CreatePessoaService();
      const pessoa = await createPessoaService.execute({
          nome,
          sobrenome,
          idade
        });
  return response.json(pessoa)
    }catch(error){
      return response.json({ Error: error.message});
    }
})


export default pessoaRouter;
