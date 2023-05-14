import { Router} from "express";
import { Container } from "typedi";

import ProductService from "../../services/product";

const route = Router();

export default (app: Router) => {
  app.use("/products", route);

  const productServiceInstance = Container.get(ProductService);

  route.get("/", async (req, res) => {
    try {
      const params = req.query;
      console.log("params", params);
      const products = await productServiceInstance.getProducts({...params});

      console.log("products", products);

      return res.json(products);
    } catch (e) {
      console.log("e", e);
      return res.json(e);
    }
  });

  route.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const product = await productServiceInstance.getProductById(Number(id));

      return res.json(product);
    } catch (e) {
      console.log("e", e);
      return res.json(e);
    }
  }
  );

  route.post("/", async (req, res) => {
    try {
      const productInput = req.body;
      const product = await productServiceInstance.createProduct(productInput);
      return res.json(product);
    } catch (e) {
      return res.json(e);
    }
  }
  );


};
