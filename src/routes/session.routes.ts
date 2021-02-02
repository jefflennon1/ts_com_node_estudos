import { Router } from "express";

const routes = Router();

routes.post('/session', (request, response)=>{
  try{
    return response.json({ Message: 'testando'});
  }catch(error){
    return response.status(400).json({ Error: error.message })
  }
});


export default routes;
