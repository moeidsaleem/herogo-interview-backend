## Task: Build a simple e-commerce product listing page with a shopping cart and a Node.js backend API

### Requirements:

- Create a Next.js application with React components that displays a list of products.
- Each product should have an image, title, price, and an "Add to Cart" button.
- Implement a shopping cart component that displays the items added to the cart, their quantities, and the total price.
- Allow users to change the quantity of items in the cart and remove items from the cart.
- Use a responsive design that works well on both desktop and mobile devices.
- Follow good CSS architecture principles by structuring and organizing your styles. Consider using a CSS-in-JS library like styled-components or Emotion, or a CSS methodology like BEM or SMACSS.
- Write maintainable and well-structured code by following best practices for React and Next.js.

### Backend:
- Create a simple Node.js backend using a framework like Express.js, Koa, or Fastify.
- Implement a RESTful API with the following endpoints:
- GET /api/products: Retrieve the list of products.
- POST /api/cart: Add a product to the cart.
- PUT /api/cart/:id: Update the quantity of a product in the cart.
- DELETE /api/cart/:id: Remove a product from the cart.
- Implement proper error handling and validation for the API endpoints.
- Write tests for the API endpoints using a testing library like Jest, Mocha, or Supertest.

### Data:

You can use the following sample data for the products or create your own:

```
[  {    "id": 1,    "title": "Product 1",    "price": 19.99,    "image": "https://via.placeholder.com/150"  },  {    "id": 2,    "title": "Product 2",    "price": 29.99,    "image": "https://via.placeholder.com/150"  },  {    "id": 3,    "title": "Product 3",    "price": 39.99,    "image": "https://via.placeholder.com/150"  }]
```

### Extras:
- Implement authentication and user sessions to enable users to log in and have their own cart state.
- Use a database to store product and cart data. You may choose any database technology (e.g., MongoDB, PostgreSQL, or SQLite) based on your preference.

### Submission Instructions:

- Create a new Git repository for your project. If you don't have a preferred Git hosting service, you can create a repository on GitHub, GitLab, or Bitbucket.
- Commit your code to the repository, making sure to include all necessary files for the project (source code, tests, configuration files, etc.).
- Write a clear and concise README.md file that includes the following information:
  - An overview of your project, including the technologies used and the main features implemented.
  - Detailed setup and installation instructions, including any prerequisites or dependencies needed to run the project.
  - Instructions on how to run the tests for both frontend and backend components.
  - Any additional information you think is relevant or important for us to know when evaluating your submission.
- Make sure that the repository is publicly accessible or that you have granted access to the appropriate reviewers.
- Once your project is ready for submission, send us the URL to your Git repository.

Please ensure that your submission meets all the requirements outlined in the task description. We will evaluate your submission based on the quality and maintainability of your code, your understanding of the technologies and concepts involved, and your ability to follow the given requirements and instructions.

Good luck, and we're looking forward to reviewing your submission!