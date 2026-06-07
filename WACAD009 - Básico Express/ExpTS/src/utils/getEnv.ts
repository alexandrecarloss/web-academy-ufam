import { cleanEnv, port, str } from "envalid";
import dotenv from 'dotenv';

dotenv.config({ quiet: true });

function getEnv() {
    return cleanEnv(process.env, {
        PORT: port({ default: 5566 }),
        LOG_DIR: str({ default: "logs"}),
        PATH_API: str({ default: "http://localhost:3355/products" }),
    });
} 

export default getEnv;