"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const client_1 = require("@prisma/client");
let CartService = class CartService {
    constructor() { } // @Inject('logger') private logger,
    prisma = new client_1.PrismaClient();
    async getCarts() {
        try {
            const cart = await this.prisma.cart.findMany();
            return cart;
        }
        catch (e) {
            console.log("e", e);
            throw e;
        }
    }
    async getCartById(id) {
        try {
            const cart = await this.prisma.cart.findUnique({
                where: {
                    id,
                },
            });
            return cart;
        }
        catch (e) {
            console.log("e", e);
            throw e;
        }
    }
    async createCart(userId, products) {
        try {
            const cart = await this.prisma.cart.create({
                data: {
                    userId: 1,
                    products: {
                        create: products
                    }
                },
            });
            return cart;
        }
        catch (e) {
            console.log("e", e);
            throw e;
        }
    }
    /* Update the Cart  */
    async updateCart(id, cartInput) {
        try {
            const cart = await this.prisma.cart.update({
                where: {
                    id,
                },
                data: {
                    ...cartInput,
                },
            });
            return cart;
        }
        catch (e) {
            console.log("e", e);
            throw e;
        }
    }
    async deleteCart(id) {
        try {
            const cart = await this.prisma.cart.delete({
                where: {
                    id,
                },
            });
            return cart;
        }
        catch (e) {
            console.log("e", e);
            throw e;
        }
    }
};
CartService = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [])
], CartService);
exports.default = CartService;
