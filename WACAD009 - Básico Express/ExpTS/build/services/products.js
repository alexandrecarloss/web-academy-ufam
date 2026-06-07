import getEnv from "../utils/getEnv.js";
const env = getEnv();
export const getProducts = async () => {
    const response = await fetch(env.PATH_API);
    return response.json();
};
//# sourceMappingURL=products.js.map