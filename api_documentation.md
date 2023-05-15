Sure! Here's an example of an API documentation in Markdown format based on the endpoints provided in the Postman collection:

# HeroGO API Documentation

## Introduction
Welcome to the HeroGO API documentation. This API provides endpoints for managing orders, products, cart, users, signup, and login functionalities.

Please note that `{{URL}}` is a placeholder for the actual URL of your backend server.

## Orders

### Get All Orders
Retrieves all orders.

- **URL**: `{{URL}}/orders/`
- **Method**: GET
- **Response**: Array of orders

### Create Order
Creates a new order.

- **URL**: `{{URL}}/orders/`
- **Method**: POST
- **Request Body**:
```json
{
  "userId": 1,
  "orderItem": [
    {
      "productId": 1,
      "quantity": 2
    },
    {
      "productId": 2,
      "quantity": 3
    },
    {
      "productId": 3,
      "quantity": 1
    }
  ]
}
```
- **Response**: Created order object

## Products

### Get All Products
Retrieves all products.

- **URL**: `{{URL}}/products/`
- **Method**: GET
- **Response**: Array of products

### Get Single Product
Retrieves a single product.

- **URL**: `{{URL}}/products/:id`
- **Method**: GET
- **Response**: Single product object

### Create Product
Creates a new product.

- **URL**: `{{URL}}/products/`
- **Method**: POST
- **Request Body**:
```json
{
  "title": "test",
  "description": "New user",
  "price": 24,
  "image": "/images/basket.png"
}
```
- **Response**: Created product object

## Cart

### Delete Product from Cart
Removes a product from the cart.

- **URL**: `{{URL}}/cart/:id`
- **Method**: DELETE
- **Response**: No content

### Get Cart
Retrieves the cart.

- **URL**: `{{URL}}/cart/`
- **Method**: GET
- **Response**: Cart object

### Add Product to Cart
Adds a product to the cart.

- **URL**: `{{URL}}/cart`
- **Method**: POST
- **Request Body**:
```json
{
  "data": [
    {
      "id": 1,
      "title": "test",
      "price": 24,
      "description": "New user",
      "image": "/images/basket.png",
      "category": null,
      "createdAt": "2023-05-14T18:40:29.188Z",
      "updatedAt": "2023-05-14T18:40:29.188Z"
    }
  ]
}
```
- **Response**: Added product object

### Update Cart
Updates the cart.

- **URL**: `{{URL}}/cart/`
- **Method**: PUT
- **Request Body**:
```json
{
  "userId": "this",
  "data": {}
}
```
- **Response**: Updated cart object

## Users

### Get All Users
Retrieves all users.

- **URL**: `{{URL}}/auth/all`
- **Method**: GET
- **Response**: Array of users

## Signup

### Signup
Registers a new user.

- **URL**: `{{URL}}/auth/signup`
- **Method**: POST
- **Request Body**:
```json
{
  "firstName": "Moeid",
"lastName": "Saleem",
"email": "moeid.tests@mgail.com",
"phone": "+971589595029",
"password": "Moeid123#"
}
```

- **Response**: User object with signup details

## Login

### Login
Logs in a user.

- **URL**: `{{URL}}/auth/signin`
- **Method**: POST
- **Request Body**:
```json
{
  "email": "moeid.tests@mgail.com",
  "password": "Moeid123#"
}
Response: User object with login details and access token

