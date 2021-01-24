import { Router } from "express";
import { getCustomRepository } from "typeorm";
import TesteRepository from "../repository/TesteRepository";
import CreateTeste from "../service/CreateTeste";

const testeRouter = Router();

testeRouter.get('/teste',async (request, response)=>{
  const testeRepository = getCustomRepository(TesteRepository);
  const testes = await testeRepository.find();
  return response.json(testes);
});

testeRouter.post('/teste', async (request, response)=>{
  try{
    const { pessoa_nome } = request.body;
    const createTeste = new CreateTeste();

    const testeCriado = await createTeste.create({
      pessoa_nome,
    })
    return response.json(testeCriado);

  }catch(err){
    return response.json({error: err.message});
  }
});

export default testeRouter;
