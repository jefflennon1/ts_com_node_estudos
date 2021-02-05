import {hash} from 'bcryptjs';
interface Request{
  email: string,
  password:string;
}
export default class AuthenticationTest{
    public execute({email, password}: Request){
      const token = hash('ahhhsnnskkkfr', 8);
    }
}
