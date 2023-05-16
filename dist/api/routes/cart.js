"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = require("typedi");
const cart_1 = __importDefault(require("../../services/cart"));
const celebrate_1 = require("celebrate");
const route = (0, express_1.Router)();
exports.default = (app) => {
    app.use("/cart", route);
    const cartServiceInstance = typedi_1.Container.get(cart_1.default);
    // get all carts
    route.get("/", async (req, res) => {
        try {
            const carts = await cartServiceInstance.getCarts();
            return res.json(carts);
        }
        catch (e) {
            return res.json(e);
        }
    });
    // add the product to the cart
    route.post("/", (0, celebrate_1.celebrate)({
        body: {
            userId: celebrate_1.Joi.number().required(),
            products: celebrate_1.Joi.array().items(celebrate_1.Joi.object({
                id: celebrate_1.Joi.number().required(),
                price: celebrate_1.Joi.number().required(),
                image: celebrate_1.Joi.string().required()
            }))
        }
    }), async (req, res) => {
        try {
            const { userId, data } = req.body;
            const order = await cartServiceInstance.createCart(userId, data);
            return res.json(order);
        }
        catch (e) {
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
        }
        catch (e) {
            return res.json(e);
        }
    });
    // Remove the products from the cart
    route.delete("/:id", async (req, res) => {
        try {
            const { id } = req.params; /* id of the product */
            const order = await cartServiceInstance.deleteProductFromCart(Number(id));
            return res.json(order);
        }
        catch (e) {
            console.log("e", e);
            return res.json(e);
        }
    });
};
