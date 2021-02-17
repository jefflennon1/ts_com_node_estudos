import { Request , Response, NextFunction } from "express";
import { decode, verify } from 'jsonwebtoken';
import AuthConfig  from '../config/auth'

export default function ensureAuthenticated(request : Request, response : Response, next: NextFunction){
  const authHeader = request.headers.authorization;

  if(!authHeader){
    throw new Error('Missing Token Jtw!');
  }
  const [, token] = authHeader.split(' ');
  const {secret, expiresIn} = AuthConfig.jwt;
 try{
  const decoded = verify(token, secret);
  console.log(decoded);
  return next();
 }catch(error){
   throw new Error('Invalid JWT token');
 }


}
