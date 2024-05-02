import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { UserModel } from "../db/userModel";

export const signup = async (req: Request, res: Response) => {
    
    //get the user entered details to store in mongodb
    const { username, email, password } = req.body;
    // [perform zod checks]

    try {
        await UserModel.create({
            username, email, password       //[should hash this password]
        })
        res.status(200).json({mgs: "user created successfully!"})
    } catch (error) {
        res.status(500).json({msg: "there was trouble creating new user"})
    }

}

export const signin = async (req: Request, res: Response) => {
    // this post req route takes username and password (and checks if exists)
    // then return returns back a jwt token after signing it with a secret
    // the user sends that in their request headers later on

    const { username, password } = req.body;
    // [perform zod checks]
    
    try {
        //check the username and pass correct and exists or not in the db
        const user = await UserModel.findOne({username: username, password: password});
        
        if (user) {
            const {username, email, _id} = user;

            //sign jwt token with username and secret
            const token = jwt.sign({username, email, _id}, process.env.JWT_SECRET as string);

            // console.log(token);
            res.status(200).json({token: token});
        }
        else {
            res.status(403).json({msg: "no such user exists or wrong inputs"});
        }

    } catch (error) {
        res.status(500).json({msg: "db is down"})
    }
}

export const profile = (req: Request, res: Response) => {
    // make this route use the user auth middleware
    const user = res.locals.user;
    res.json({
        msg: "welcome to your profile page!",
        userData: user,
    })
}