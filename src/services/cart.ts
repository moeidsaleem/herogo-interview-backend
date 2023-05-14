import { Service } from "typedi";

import { PrismaClient } from "@prisma/client";
import { createDecipheriv } from "crypto";

@Service()
export default class CartService {
  constructor() {} // @Inject('logger') private logger,

  prisma = new PrismaClient();
  public async getCarts(): Promise<any> {
    try {
      const cart = await this.prisma.cart.findMany();
      return cart;
    } catch (e) {
      console.log("e", e);
      throw e;
    }
  }

  public async getCartById(id: number): Promise<any> {
    try {
      const cart = await this.prisma.cart.findUnique({
        where: {
          id,
        },
      });
      return cart;
    } catch (e) {
      console.log("e", e);
      throw e;
    }
  }
  public async createCart(userId: number, products: any): Promise<any> {
    try {
       // check if cart already exists
    const cartExists = await this.prisma.cart.findFirst({
      where: {
        userId,
      },
    });


    const actionType = cartExists ? "update" : "create" || "create";

    if (actionType === "create") {
      const cart = await this.prisma.cart.create({
        data: {
          userId,
          products,
        },
      });
      return cart;
    } else {
      const cart = await this.prisma.cart.update({
        where: {
          userId,
        },
        data: {
          products,
        },
      });
      return cart;
    }
    } catch (e) {
      console.log("e", e);
      throw e;
    }
  }

  /* Update the Cart  */
  public async updateCart(id: number, cartInput: any): Promise<any> {
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
    } catch (e) {
      console.log("e", e);
      throw e;
    }
  }

  public async deleteCart(id: number): Promise<any> {
    try {
      const cart = await this.prisma.cart.delete({
        where: {
          id,
        },
      });
      return cart;
    } catch (e) {
      console.log("e", e);
      throw e;
    }
  }
}
