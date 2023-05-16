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

  // create cart or update the cart if already exists (Add a product to the cart.)
  public async createCart(userId: number, products: any): Promise<any> {
    try {
      const cartExist = await this.prisma.cart.findFirst({
        where: {
          userId,
        },
      });
      if (cartExist) {
        const cart = await this.prisma.cart.update({
          where: {
            id: cartExist.id,
          },
          data: {
            products: {
              create: products,
            },
          },
        });
        return cart;
      }

      const cartData = await this.prisma.cart.create({
        data: {
          userId,
          products: {
            create: products,
          },
        },
      });
      return cartData;
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



  public async deleteProductFromCart(productId: number): Promise<any> {
    try {
      const cart = await this.prisma.cart.deleteMany({
        where: {
          userId:1, /* Please note that this require more work */
          products: {
            some: {
              id: productId,
            }
          }
        },
      });
      return cart;
    
    
  }catch(e){
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
