declare function getEnv(): Readonly<{
    PORT: number;
    NODE_ENV: string;
    LOG_DIR: string;
} & import("envalid").CleanedEnvAccessors>;
export default getEnv;
//# sourceMappingURL=getEnv.d.ts.map