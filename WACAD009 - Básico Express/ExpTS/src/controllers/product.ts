import type { Request, Response } from "express";
import { createProduct, getProducts } from "../services/products.js";
import type { Product } from "../types/product.js";

const index= async (req: Request, res: Response) => {
    const products = await getProducts()
    res.render("products/index", {
        products
    })
}
const create = async (req: Request, res: Response) => {
    if (req.method === "GET") {
        res.render("products/create")
    } else if (req.method === "POST") {
        const product = req.body as Product
        await createProduct(product)
        res.redirect("/products")
    }
}
const read = async (req: Request, res: Response) => {
    const { id } = req.params; 
    res.end(id);
}
const update = async (req: Request, res: Response) => {

}
const remove = async (req: Request, res: Response) => {

}

export default { index, create, read, update, remove }