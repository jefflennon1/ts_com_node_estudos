import { Router } from "express";
import CreateUsersService from "../service/CreateUsersService";
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import multer from 'multer';
import uploadConfig from '../config/uploads';

const upload = multer(uploadConfig);

const usersRoutes = Router();


usersRoutes.post('/users',ensureAuthenticated, async (request, response)=>{
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

usersRoutes.patch('/users/avatar', ensureAuthenticated,  upload.single('avatar'), async (request, response)=>{
  console.log(request.file)
  return response.json({message: 'hello'})
});


export default usersRoutes;
