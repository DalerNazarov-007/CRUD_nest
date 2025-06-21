import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config();

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) throw new UnauthorizedException('Authorization header missing');

    const [type, token] = authHeader.split(' ');
    if (type !== 'Bearer' || !token) throw new UnauthorizedException('Invalid token format');
      const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET_KEY);
      req['user'] = decoded;
      next();
  }
}
