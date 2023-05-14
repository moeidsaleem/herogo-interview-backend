"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = require("typedi");
const order_1 = __importDefault(require("../../services/order"));
const route = (0, express_1.Router)();
exports.default = (app) => {
    app.use("/orders", route);
    const orderServiceInstance = typedi_1.Container.get(order_1.default);
    route.get("/", async (req, res) => {
        try {
            const params = req.query;
            console.log("params", params);
            const orders = await orderServiceInstance.getOrders({ ...params });
            console.log("orders", orders);
            return res.json(orders);
        }
        catch (e) {
            console.log("e", e);
            return res.json(e);
        }
    });
    route.get("/:id", async (req, res) => {
        try {
            const { id } = req.params;
            const order = await orderServiceInstance.getOrderById(Number(id));
            return res.json(order);
        }
        catch (e) {
            console.log("e", e);
            return res.json(e);
        }
    });
    route.post("/", async (req, res) => {
        try {
            const userId = req.body.userId;
            const orderItems = req.body.orderItem;
            const order = await orderServiceInstance.createOrder(userId, orderItems);
            return res.json(order);
        }
        catch (e) {
            return res.json(e);
        }
    });
};
