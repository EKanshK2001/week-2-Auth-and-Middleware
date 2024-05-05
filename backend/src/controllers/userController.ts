import { Request, Response } from "express";
import 'dotenv/config'

export const profile = (req: Request, res: Response) => {
    // make this route use the user auth middleware
    const user= res.locals.user;
    const { password: pass,...rest} = user._doc;
    //! profile probably does need to send the password and email details to let the user edit them (LATER)
    res.status(200).json(rest)
}