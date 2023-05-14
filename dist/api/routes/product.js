"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = require("typedi");
const product_1 = __importDefault(require("../../services/product"));
const route = (0, express_1.Router)();
exports.default = (app) => {
    app.use("/products", route);
    const productServiceInstance = typedi_1.Container.get(product_1.default);
    route.get("/", async (req, res) => {
        try {
            const params = req.query;
            console.log("params", params);
            const products = await productServiceInstance.getProducts({ ...params });
            console.log("products", products);
            return res.json(products);
        }
        catch (e) {
            console.log("e", e);
            return res.json(e);
        }
    });
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
    route.post("/", async (req, res) => {
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
