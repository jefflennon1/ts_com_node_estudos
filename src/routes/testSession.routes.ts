import { Router } from "express";
import AuthenticationTest from "../service/AuthenticationTest";

const testeSessionRouter = Router();

testeSessionRouter.post('/testSession',async (request, response)=>{
   try{   const { pessoa_nome, password } = request.body;
      const testeAuthenticaded = new AuthenticationTest();
      const { teste, token } = await testeAuthenticaded.execute({
        pessoa_nome,
        password
      })

      return response.json({teste, token});
   }catch(error){
     return response.status(400).json({ Error: error.message});
   }
});


export default testeSessionRouter;
