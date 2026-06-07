declare function getEnv(): Readonly<{
    PORT: number;
    LOG_DIR: string;
    PATH_API: string;
} & import("envalid").CleanedEnvAccessors>;
export default getEnv;
//# sourceMappingURL=getEnv.d.ts.map