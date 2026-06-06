import {} from 'express';
export const user = {
    checkAuth: (req) => {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return false;
        }
        return true;
    }
};
//# sourceMappingURL=user.js.map