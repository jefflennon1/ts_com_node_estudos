import { Request , Response, NextFunction } from "express";
import { decode, verify } from 'jsonwebtoken';
import AuthConfig  from '../config/auth';
import AppError from "../errors/AppError";

interface TokenPayload{
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(request : Request, response : Response, next: NextFunction){
  const authHeader = request.headers.authorization;

  if(!authHeader){
    throw new AppError('Missing Token Jtw!', 403);
  }
  const [, token] = authHeader.split(' ');
  const {secret, expiresIn} = AuthConfig.jwt;
 try{
  const decoded = verify(token, secret);

    const { sub } = decoded as TokenPayload;

    request.user={
      id: sub,
    }

    return next();
 }catch(error){
   throw new AppError('Invalid JWT token', 403);
 }
}
