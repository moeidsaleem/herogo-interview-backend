import { Router} from "express";
import { Container } from "typedi";

import OrderService from "../../services/order";

const route = Router();

export default (app: Router) => {
  app.use("/orders", route);

  const orderServiceInstance = Container.get(OrderService);

  route.get("/", async (req, res) => {
    try {
      const params = req.query;
      console.log("params", params);
      const orders = await orderServiceInstance.getOrders({...params});

      console.log("orders", orders);

      return res.json(orders);
    } catch (e) {
      console.log("e", e);
      return res.json(e);
    }
  });

  route.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const order = await orderServiceInstance.getOrderById(Number(id));

      return res.json(order);
    } catch (e) {
      console.log("e", e);
      return res.json(e);
    }
  }
  );

  route.post("/", async (req, res) => {
    try {
      const userId = req.body.userId;
      const orderItems =req.body.orderItem;
      const order = await orderServiceInstance.createOrder(userId, orderItems);
      return res.json(order);
    } catch (e) {
      return res.json(e);
    }
  }
  );


};
