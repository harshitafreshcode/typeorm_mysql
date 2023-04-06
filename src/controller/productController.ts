import { Request, Response } from "express";
import { MessageResponse } from "../config/commenResError";
const db = require("../connection/index");
const Products = db.product
const Category = db.category


const getApi = async (req: Request, res: Response) => {

    res.json({ message: "“Welcome to Turing.com”" });
}

const createProduct = async (req: Request, res: Response) => {
    try {
        console.log("product", req.body);

        const craeteProduct = await Products.create({
            name: req.body.name,
            mrp: req.body.mrp,
            price: req.body.price,
            categoryId: req.body.categoryId
        })
        res.status(201).json(craeteProduct)
    } catch (error) {
        console.log(error);
        res.send(error)

    }
}

const getProduct = async (req: Request, res: Response) => {
    try {

        const Product = await Products.findAll({
            include: [Category]
        })
        res.status(201).json(Product)
    } catch (error) {
        console.log(error);
        res.send(error)

    }
}
const deleteProduct = async (req: Request, res: Response) => {
    try {
        const product = await Products.destroy({
            where: {
                id: req.params.id
            }
        })


        return MessageResponse(req, res, "product deleted", 200)
    } catch (error) {
        console.log(error);
        res.send(error)

    }
}
const updateProduct = async (req: Request, res: Response) => {
    try {
        const Obj = {
            name: req.body.name ?? undefined,
            mrp: req.body.mrp ?? undefined,
            price: req.body.price ?? undefined,
            categoryId: req.body.categoryId ?? undefined
        }
        const product = await Products.update(Obj,{
            where: {
                id: req.params.id
            }
        },{new:true})
        console.log(product,'product');
        


        return MessageResponse(req, res, "product updated", 200)
    } catch (error) {
        console.log(error);
        res.send(error)

    }
}

export { getApi, createProduct, getProduct, deleteProduct,updateProduct }