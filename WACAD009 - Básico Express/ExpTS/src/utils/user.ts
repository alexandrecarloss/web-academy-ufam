import { type Request } from 'express';

export const user = {
  checkAuth: (req: Request): boolean => {
    const authHeader = req.headers['authorization'];
    
    if (!authHeader) {
      return false;
    }
    return true;
  }
};