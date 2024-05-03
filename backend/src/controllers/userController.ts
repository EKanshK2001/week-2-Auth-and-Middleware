import { Request, Response } from "express";
import 'dotenv/config'

export const profile = (req: Request, res: Response) => {
    // make this route use the user auth middleware
    const user = res.locals.user;
    res.json(user)
}