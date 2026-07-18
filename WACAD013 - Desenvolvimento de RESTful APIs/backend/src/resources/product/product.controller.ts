import type { Request, Response } from "express";
import type { CreateProductDto } from "./product.types.js";
import { createProduct, getProductById, getProducts, updateProduct, deleteProduct } from "./product.service.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError, productErrors } from "./product.errors.js";

const index = async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    res.status(StatusCodes.OK).json(products);
  } catch (err) {
    productErrors(err, res);
  }
};

const create = async (req: Request, res: Response) => {
  const product = req.body as CreateProductDto;
  try {
    const newProduct = await createProduct(product);
    res.status(StatusCodes.CREATED).json(newProduct);
  } catch (err) {
    productErrors(err, res);
  }
};

const read = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    try {
        const product = await getProductById(id);
        if (!product) {
            if (!product) {
            throw new NotFoundError(`Product with ID ${id} was not found.`);
        }
        }
        res.status(StatusCodes.OK).json(product);
    } catch (err) {
        productErrors(err, res);
    }
};

const update = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  try {
    const product = await getProductById(id);
    if (!product) {
      throw new NotFoundError(`Product with ID ${id} was not found.`);
    }
    const updatedProduct = req.body as CreateProductDto;
    const result = await updateProduct(id, updatedProduct);
    res.status(StatusCodes.OK).json(result);
  } catch (err) {
    productErrors(err, res);
  }
};

const remove = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  try {
    const product = await getProductById(id);
    if (!product) {
      throw new NotFoundError(`Product with ID ${id} was not found.`);
    }
    const result = await deleteProduct(id);
    res.status(StatusCodes.OK).json(result);
  } catch (err) {
    productErrors(err, res);
  }
};

export default { index, create, read, update, remove };
