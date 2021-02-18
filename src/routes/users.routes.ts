import { Router } from "express";
import CreateUsersService from "../service/CreateUsersService";
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

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

  // delete user.password;
return response.json(user)

}catch(err){
  return response.status(400).json({message : err.message})
}
});

usersRoutes.patch('/users/avatar', ensureAuthenticated, async (request, response)=>{
  return response.json({message: 'hello'})
});


export default usersRoutes;
