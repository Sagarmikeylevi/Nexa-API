import ProductModel from "./product.model.js";

export default class ProductController {
  getAllProducts(req, res) {
    const products = ProductModel.getAll();
    res.status(200).send(products);
  }
  addProducts(req, res) {
    const { name, price, sizes } = req.body;
    const newProduct = {
      name,
      price: parseFloat(price),
      sizes: sizes.split(","),
      imageUrl: req.file.filename,
    };

    console.log(newProduct);
    const createdRecord = ProductModel.add(newProduct);
    res.status(201).send(createdRecord);
  }
  getOneProduct(req, res) {
    const { id } = req.params;
    const product = ProductModel.get(id);
    if (!product) {
      res.status(404).send("Product not found");
    } else {
      return res.status(200).send(product);
    }
  }
  filterProduct(req, res) {
    const { minPrice, maxPrice, category } = req.query;
    const result = ProductModel.filter(minPrice, maxPrice, category);

    res.status(200).send(result);
  }
  rateProduct(req, res) {}
}
