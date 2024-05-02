import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'
import { UserModel } from "../db/userModel";

export const userAuth = (req: Request, res: Response, next: NextFunction) => {
    
    // take token from header and use it to verify with the jwt secret
    // if correct then call next. if not then dont call next and send msg to login

    if (req.headers.authorization) {
        
        try {
            const token = (req.headers.authorization).split('Bearer ')[1];
        
            const verified:JwtPayload = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
            

            if (verified) {
                const getUserData =  async () => {
                    try {
                        res.locals.user = await UserModel.findById <userInterface> (verified._id);
                        console.log(res.locals.user);
                        
                        next();
                    } catch (error) {
                        res.status(500).json({msg: 'there was some error fetching your data'})
                    }
                }
                getUserData();
            }
            
        } catch (error) {
            res.status(403).json({msg: "unauthorized"});
        }
        
    }

    else res.status(401).json({msg: "Please log in"});
    
}