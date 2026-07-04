import type { Schema } from "joi";
import type { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

function validate(schema: Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body)
        if (error) res.status(StatusCodes.BAD_REQUEST).json(error);
        else next();
    }
}

export default validate;