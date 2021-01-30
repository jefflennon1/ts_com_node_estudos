import { Router } from "express";

const usersRoutes = Router();


usersRoutes.post('/users', (request, response)=>{
try{
 return response.json({message: 'teste!'})
}catch(err){
  return response.status(400).json({message : err.message})
}
})


export default usersRoutes;
