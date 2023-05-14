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
let OrderService = class OrderService {
    constructor() { } // @Inject('logger') private logger,
    prisma = new client_1.PrismaClient();
    async getOrders(params) {
        try {
            const orders = await this.prisma.order.findMany({
                where: {
                    ...params,
                },
                include: {
                    orderItem: {
                        include: {
                            product: true,
                        },
                    }
                },
            });
            return orders;
        }
        catch (e) {
            console.log("e", e);
            throw e;
        }
    }
    async getOrderById(id) {
        try {
            const order = await this.prisma.order.findUnique({
                where: {
                    id,
                },
                include: {
                    orderItem: true,
                },
            });
            return order;
        }
        catch (e) {
            console.log("e", e);
            throw e;
        }
    }
    async createOrder(userId, orderItems) {
        try {
            if (!Array.isArray(orderItems)) {
                throw new Error("Invalid order items. Expected an array.");
            }
            const order = await this.prisma.order.create({
                data: {
                    userId,
                    orderItem: {
                        createMany: {
                            data: orderItems.map(({ productId, quantity }) => ({
                                productId,
                                quantity,
                            })),
                        },
                    },
                },
                include: {
                    orderItem: true,
                },
            });
            return order;
        }
        catch (error) {
            console.error("Error creating order:", error);
            throw error;
        }
    }
    async updateOrder(id, data) {
        try {
            const order = await this.prisma.order.update({
                where: {
                    id,
                },
                data,
            });
            return order;
        }
        catch (e) {
            console.log("e", e);
            throw e;
        }
    }
};
OrderService = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [])
], OrderService);
exports.default = OrderService;
