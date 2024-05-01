import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const signin = (req: Request, res: Response) => {
    // this post req route takes username and password (and checks if exists)
    // then return returns back a jwt token after signing it with a secret
    // the user sends that in their request headers later on

    const { username, email, password } = req.body;
    const userId = 984791274;
    
    //check the username and pass correct and exists or not in the db
    
    //sign jwt token with username and secret
    const token = jwt.sign({username, userId, email}, process.env.JWT_SECRET as string)

    // console.log(token);
    
    res.json({token: token});
}

export const profile = (req: Request, res: Response) => {
    // make this route use the user auth middleware

    res.json({msg: "welcome to your profile page!"})
}