import { Router } from "express";
import CreateUsersService from "../service/CreateUsersService";

const usersRoutes = Router();


usersRoutes.post('/users', async (request, response)=>{
try{
  const { name, email, password } = request.body;
  const createUser = new CreateUsersService();
  const user = await createUser.execute({
    name,
    email,
    password
  });
return response.json(user)

}catch(err){
  return response.status(400).json({message : err.message})
}
})


export default usersRoutes;
