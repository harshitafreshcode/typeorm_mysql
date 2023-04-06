import { NextFunction, Request, Response } from "express"
import { ErrorMessage } from "../commenResError";
const jwt = require('jsonwebtoken')

declare global {
    namespace Express {
        interface Request {
            userId: any;
            userType: any;
            empId: any;
            // cookies:any
        }
    }
}


const auth = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.cookies.access_token
    if (!token) {
        return ErrorMessage(req, res, 'token not found', 401);

    }

    await jwt.verify(token, process.env.SECRET_KEY, {}, async (error: any, data: any) => {
        if (error) {
            if (error.name == "TokenExpiredError") {

                return ErrorMessage(req, res, "TOKEN_EXPIRED", 401)

            } else {

                return ErrorMessage(req, res, "INVALID_SESSION", 401)
            }
        }
        else {
           

            req.userId = data.id

            next()

        }
    })
}

export default auth