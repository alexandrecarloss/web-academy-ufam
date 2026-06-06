import { cleanEnv, port, str } from "envalid";
import dotenv from 'dotenv';
dotenv.config({ quiet: true });
function getEnv() {
    return cleanEnv(process.env, {
        PORT: port({ default: 5566 }),
        NODE_ENV: str(),
        LOG_DIR: str(),
    });
}
export default getEnv;
//# sourceMappingURL=getEnv.js.map