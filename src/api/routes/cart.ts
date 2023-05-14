import { Router} from "express";
import { Container } from "typedi";

import CartService from "../../services/cart";

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
  route.post("/", async (req, res) => {
    try {
      const { userId,data } = req.body;
      console.log("userId", userId);
      if (!userId) {
        return res.json({ error: "userId is required" });
      }
      const order = await cartServiceInstance.createCart(userId, data);
      console.log("order", order);
      return res.json(order);
    } catch (e) {
      console.log("e", e);
      return res.json(e);
    }
  });
  

  // update quantity of product in cart
  route.put("/", async (req, res) => {
    try {
      const { userId, data } = req.body;
      console.log("userId", userId);
      console.log("cart", data);
      const order = await cartServiceInstance.updateCart(userId, data);
      return res.json(order);
    } catch (e) {
      return res.json(e);
    }
  });

  route.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const order = await cartServiceInstance.getCartById(Number(id));

      return res.json(order);
    } catch (e) {
      console.log("e", e);
      return res.json(e);
    }
  });

};
