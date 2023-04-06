import { NextFunction, Request, Response } from "express";
import { ErrorMessage } from "../commenResError";
const validator = require('./helper');


const createProduct= async (req: Request, res: Response, next: NextFunction) => {
    
    const validationRule = {       

        "name": "required|string",  
        "mrp": "required|numeric",  
        "price": "required|numeric",  
              
    }
    await validator(req.body, validationRule, { required_without: 'email or phoneNo must required', digits_between: "phone number must be 10 digits" }, (err: any, status: any) => {
        if (!status) {
            const tempObj = err.errors
            let transformed: any = {};
            Object.keys(tempObj).forEach(function (key, index) {
                transformed[key] = tempObj[key]?.join('');
            })
            console.log(transformed, 'transformed');
            
            ErrorMessage(req, res, transformed, 422)
            
        } else {
            next()
        }
    }).catch((e: any) => console.log(e))
}
const createCategoty= async (req: Request, res: Response, next: NextFunction) => {
    
    const validationRule = {       

        "name": "required|string",  
        "icon": "required|string",  
        "status": "required|boolean",  
              
    }
    await validator(req.body, validationRule, { required_without: 'email or phoneNo must required', digits_between: "phone number must be 10 digits" }, (err: any, status: any) => {
        if (!status) {
            const tempObj = err.errors
            let transformed: any = {};
            Object.keys(tempObj).forEach(function (key, index) {
                transformed[key] = tempObj[key]?.join('');
            })
            console.log(transformed, 'transformed');
            
            ErrorMessage(req, res, transformed, 422)
            
        } else {
            next()
        }
    }).catch((e: any) => console.log(e))
}
export { createProduct,createCategoty }