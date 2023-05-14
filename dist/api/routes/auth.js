"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = require("typedi");
const auth_1 = __importDefault(require("../../services/auth"));
const middlewares_1 = __importDefault(require("../middlewares"));
const celebrate_1 = require("celebrate");
const client_1 = require("@prisma/client");
const route = (0, express_1.Router)();
exports.default = (app) => {
    app.use("/auth", route);
    const prisma = new client_1.PrismaClient();
    const authServiceInstance = typedi_1.Container.get(auth_1.default);
    route.get("/all", async (req, res) => {
        try {
            console.log('testing ');
            // const user = await prisma.user.create({
            //     data:{
            //         firstName:'laove',
            //         lastName:'prisma',
            //         email:'moeidxsaleem@gmail.com',
            //         password:'fucsker123',
            //         phone:'0902078601'
            //     }
            // });
            const user = await prisma.user.findMany();
            console.log("user", user);
            return res.json(user);
        }
        catch (e) {
            console.log('e', e);
            return res.json(e);
        }
    });
    route.post("/signup", (0, celebrate_1.celebrate)({
        body: celebrate_1.Joi.object({
            firstName: celebrate_1.Joi.string().required(),
            lastName: celebrate_1.Joi.string().required(),
            email: celebrate_1.Joi.string().required(),
            phone: celebrate_1.Joi.string(),
            password: celebrate_1.Joi.string().required(),
        }),
    }), async (req, res, next) => {
        // const logger = Container.get<Logger>('logger');
        console.log("request body", req.body);
        // logger.debug('req', req.body);
        try {
            const { user, token } = await authServiceInstance.SignUp(req.body);
            return res.status(201).json({ user, token });
        }
        catch (e) {
            console.log("e", e);
            return next(e);
        }
    });
    route.post("/signin", (0, celebrate_1.celebrate)({
        body: celebrate_1.Joi.object({
            email: celebrate_1.Joi.string().required(),
            password: celebrate_1.Joi.string().required(),
        }),
    }), async (req, res, next) => {
        // const logger = Container.get<Logger>("logger");
        try {
            const { email, password } = req.body;
            const { user, token } = await authServiceInstance.SignIn(email, password);
            return res.json({ user, token }).status(200);
        }
        catch (e) {
            // logger.error("Error loading e")
            next(e);
        }
    });
    route.post('/logout', middlewares_1.default.isAuth, (req, res, next) => {
        const logger = typedi_1.Container.get('logger');
        logger.debug('Calling Sign-Out endpoint with body: %o', req.body);
        try {
            return res.status(200).end();
        }
        catch (e) {
            logger.error('🔥 error %o', e);
            return next(e);
        }
    });
};
