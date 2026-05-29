import { cleanEnv, port, str } from "envalid";
import { type Request } from 'express';

const validateEnv = () => {
  cleanEnv(process.env, 
    { 
        NODE_ENV: str(), 
        PORT: port(),
        LOG_DIR: str()
    });
};

export const user = {
  checkAuth: (req: Request): boolean => {
    const authHeader = req.headers['authorization'];
    
    if (!authHeader) {
      return false;
    }
    return true;
  }
};

export default validateEnv;
