import { cleanEnv, port, url, num, str } from "envalid";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

function getEnv() {
    return cleanEnv(process.env, {
        PORT: port({default: 8999}),
        DATABASE_URL: url(),
        ROUNDS_BCRYPT: num({ default: 10 }),
        DEFAULT_LANG: str({ default: 'pt-BR'}),
    })
}

export default getEnv;