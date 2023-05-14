import { Router as RouterExpress } from "express";

import config from "../config";
import auth from "./routes/auth";
import product from "./routes/product";
import order from "./routes/order";

// guaranteed to get dependencies
export default () => {
  const app = RouterExpress();
    auth(app);
  product(app);
  order(app);
  // shop(app);
  return app;
};
