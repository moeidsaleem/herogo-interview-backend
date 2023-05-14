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
let ProductService = class ProductService {
    constructor() { }
    prisma = new client_1.PrismaClient();
    async getProducts(params) {
        try {
            const products = await this.prisma.product.findMany();
            return products;
        }
        catch (e) {
            console.log('e', e);
            throw e;
        }
    }
    async getProductById(id) {
        try {
            const product = await this.prisma.product.findUnique({
                where: {
                    id
                }
            });
            return product;
        }
        catch (e) {
            console.log('e', e);
            throw e;
        }
    }
    async createProduct(productInput) {
        try {
            const product = await this.prisma.product.create({
                data: {
                    ...productInput
                }
            });
            return product;
        }
        catch (e) {
            console.log('e', e);
            throw e;
        }
    }
    async updateProduct(id, productInput) {
        try {
            const product = await this.prisma.product.update({
                where: {
                    id
                },
                data: {
                    ...productInput
                }
            });
            return product;
        }
        catch (e) {
            console.log('e', e);
            throw e;
        }
    }
    async deleteProduct(id) {
        try {
            const product = await this.prisma.product.delete({
                where: {
                    id
                }
            });
            return product;
        }
        catch (e) {
            console.log('e', e);
            throw e;
        }
    }
};
ProductService = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [])
], ProductService);
exports.default = ProductService;
