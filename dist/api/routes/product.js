"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = require("typedi");
const product_1 = __importDefault(require("../../services/product"));
const celebrate_1 = require("celebrate");
const route = (0, express_1.Router)();
exports.default = (app) => {
    app.use("/products", route);
    const productServiceInstance = typedi_1.Container.get(product_1.default);
    /* Get All Products */
    route.get("/", async (req, res) => {
        try {
            const params = req.query;
            const products = await productServiceInstance.getProducts({ ...params });
            return res.json(products);
        }
        catch (e) {
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
        }
        catch (e) {
            console.log("e", e);
            return res.json(e);
        }
    });
    /* Create Product */
    route.post("/", (0, celebrate_1.celebrate)({
        body: {
            title: celebrate_1.Joi.string().required(),
            description: celebrate_1.Joi.string().required(),
            price: celebrate_1.Joi.number().required(),
            image: celebrate_1.Joi.string().required(),
        },
    }), async (req, res) => {
        try {
            const productInput = req.body;
            const product = await productServiceInstance.createProduct(productInput);
            return res.json(product);
        }
        catch (e) {
            return res.json(e);
        }
    });
};
