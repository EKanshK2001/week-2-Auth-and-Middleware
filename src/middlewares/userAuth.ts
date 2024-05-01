import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

export const userAuth = (req: Request, res: Response, next: NextFunction) => {
    
    // take token from header and use it to verify with the jwt secret
    // if correct then call next. if not then dont call next and send msg to login

    if (req.headers.authorization) {
        
        try {
            const token = (req.headers.authorization).split('Bearer ')[1];
            const verified = jwt.verify(token, process.env.JWT_SECRET as string);
            
            if (verified) {
                next();
            }
            
        } catch (error) {
            res.status(403).json({msg: "unauthorized"});
        }
        
    }

    else res.status(403).json({msg: "Please log in"});
    
}