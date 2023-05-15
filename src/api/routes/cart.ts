import { Router} from "express";
import { Container } from "typedi";

import CartService from "../../services/cart";
import { celebrate, Joi } from "celebrate";

const route = Router();

export default (app: Router) => {
  app.use("/cart", route);
  const cartServiceInstance = Container.get(CartService);

  // get all carts
  route.get("/", async (req, res) => {
    try {
      const carts = await cartServiceInstance.getCarts();
      return res.json(carts);
    } catch (e) {
      return res.json(e);
    }
  });

  // add the product to the cart
  route.post("/",
  celebrate({
    body:{
      userId: Joi.number().required(),
      products: Joi.array().items(Joi.object({
        id: Joi.number().required(),
        price: Joi.number().required(),
        image: Joi.string().required()
      }))
    }
  })
, async (req, res) => {
    try {
      const { userId,data } = req.body;
      const order = await cartServiceInstance.createCart(userId, data);
      return res.json(order);
    } catch (e) {
      console.log("e", e);
      return res.json(e);
    }
  });

  /*  Update the Cart */
  route.put("/", async (req, res) => {
    try {
      const { userId, data } = req.body;
      const order = await cartServiceInstance.updateCart(userId, data);
      return res.json(order);
    } catch (e) {
      return res.json(e);
    }
  });

  // Remove the products from the cart
  route.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params; /* id of the product */
      const order = await cartServiceInstance.deleteProductFromCart(Number(id));
      return res.json(order);
    } catch (e) {
      console.log("e", e);
      return res.json(e);
    }
  });

};
