import { Service} from "typedi";

import {   PrismaClient } from "@prisma/client";

@Service()
export default class ProductService {
  constructor() // @Inject('logger') private logger,
  {}

   prisma = new PrismaClient();
  public async getProducts(params): Promise<any> {
    try{
      const products = await this.prisma.product.findMany();
      return products;
    } catch(e){
      console.log('e', e);
      throw e
    }
    
}

public async getProductById(id: number): Promise<any> {
  try{
    const product = await this.prisma.product.findUnique({
      where:{
        id
      }
    });
    return product;
  }
  catch(e){
    console.log('e', e);
    throw e;
  }
}

public async createProduct(productInput: any): Promise<any> {
  try{
    const product = await this.prisma.product.create({
      data:{
        ...productInput
      }
    });
    return product;
  }
  catch(e){
    console.log('e', e);
    throw e;
  }

}

public async updateProduct(id: number, productInput: any): Promise<any> {
  try{
    const product = await this.prisma.product.update({
      where:{
        id
      },
      data:{
        ...productInput
      }
    });
    return product;
  }
  catch(e){
    console.log('e', e);
    throw e;
  }

}

public async deleteProduct(id: number): Promise<any> {
  try{
    const product = await this.prisma.product.delete({
      where:{
        id
      }
    });
    return product;
  }
  catch(e){
    console.log('e', e);
    throw e;
  }
}



}
