import { Service, Inject } from "typedi";
import jwt from "jsonwebtoken";
import config from "../config";
import argon2 from "argon2";
import { randomBytes } from "crypto";
import { IUser, IUserInput } from "../interfaces/IUser";
import {  Prisma, PrismaClient } from "@prisma/client";

@Service()
export default class OrderService {
  constructor() {} // @Inject('logger') private logger,

  prisma = new PrismaClient();
  public async getOrders(params): Promise<any> {
    try {
      const orders = await this.prisma.order.findMany({
        where: {
          ...params,
        },
       
      });
      return orders;
    } catch (e) {
      console.log("e", e);
      throw e;
    }
  }

  public async getOrderById(id: number): Promise<any> {
    try {
      const order = await this.prisma.order.findUnique({
        where: {
          id,
        },
      
      });
      return order;
    } catch (e) {
      console.log("e", e);
      throw e;
    }
  }

  public async createOrder(
    userId: number,
    orderItems: { productId: number; quantity: number }[]
  ): Promise<any> {
    try {
      if (!Array.isArray(orderItems)) {
        throw new Error("Invalid order items. Expected an array.");
      }

      const order = await this.prisma.order.create({
        data: {
          user: {}
        }
      });

      return order;
    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  }

  public async updateOrder(id: number, data: any): Promise<any> {
    try {
      const order = await this.prisma.order.update({
        where: {
          id,
        },
        data,
      });
      return order;
    } catch (e) {
      console.log("e", e);
      throw e;
    }
  }
}
