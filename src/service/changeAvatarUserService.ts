
interface Request{
  user_id: string;
  avatar: string;
}

class ChangeAvatarUserService{
  async execute({ user_id, avatar }:Request):Promise<void>{

  }
}

export default ChangeAvatarUserService;
