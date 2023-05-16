import { expect } from 'chai';
import request from 'supertest';
import { app } from '../setup';




describe('Products API', () => {
  describe('GET /api/products/', () => {
    it('should return all products', async () => {
      const res = await request(app).get('/api/products/');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
    });
  });

  describe('GET /products/:id', () => {
    it('should return a single product', async () => {
      const res = await request(app).get('/products/1');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('object');

    });
  });

  describe('POST /products/', () => {
    it('should create a new product', async () => {
      const productData = {
        title: 'Test Product',
        description: 'New Product',
        price: 10.99,
        image: '/images/product.png',
      };

      const res = await request(app)
        .post('/products/')
        .send(productData);

      expect(res.status).to.equal(201);
      expect(res.body).to.be.an('object');

    });
  });



});
