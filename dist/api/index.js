"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./routes/auth"));
const product_1 = __importDefault(require("./routes/product"));
const order_1 = __importDefault(require("./routes/order"));
// guaranteed to get dependencies
exports.default = () => {
    const app = (0, express_1.Router)();
    (0, auth_1.default)(app);
    (0, product_1.default)(app);
    (0, order_1.default)(app);
    // shop(app);
    return app;
};
