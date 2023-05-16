import { Router } from "express";
import { Container } from "typedi";

import ProductService from "../../services/product";
import { Joi, celebrate } from "celebrate";

const route = Router();

export default (app: Router) => {
  app.use("/products", route);

  const productServiceInstance = Container.get(ProductService);

  /* Get All Products */
  route.get("/", async (req, res) => {
    try {
      const params = req.query;
      const products = await productServiceInstance.getProducts({ ...params });
      return res.json(products);
    } catch (e) {
      console.log("e", e);
      return res.json(e);
    }
  });

  /* Get Product By Id */
  route.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const product = await productServiceInstance.getProductById(Number(id));
      return res.json(product);
    } catch (e) {
      console.log("e", e);
      return res.json(e);
    }
  });

  /* Create Product */
  route.post(
    "/",
    celebrate({
      body: {
        title: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        image: Joi.string().required(),
      },
    }),
    async (req, res) => {
      try {
        const productInput = req.body;
        const product = await productServiceInstance.createProduct(
          productInput
        );
        return res.json(product);
      } catch (e) {
        return res.json(e);
      }
    }
  );
};
