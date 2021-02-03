import { Router } from "express";
import AuthenticateUserService from '../service/AuthenticateUserService'

const routes = Router();

routes.post('/session', async(request, response)=>{
  try{
    const { email, password } = request.body;
    const authenticateUser =  new AuthenticateUserService();
    const { user, token } =  await authenticateUser.execute({
        email,
        password,
      })
      delete user.password;
    return response.json({user, token});
  }catch(error){
    return response.status(400).json({ Error: error.message })
  }
});


export default routes;
