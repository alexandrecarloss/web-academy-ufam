import { getProducts } from "../services/products.js";
const index = async (req, res) => {
    const products = await getProducts();
    res.render("products/index", {
        products
    });
};
const create = async (req, res) => {
};
const read = async (req, res) => {
    const { id } = req.params;
    res.end(id);
};
const update = async (req, res) => {
};
const remove = async (req, res) => {
};
export default { index, create, read, update, remove };
//# sourceMappingURL=product.js.map