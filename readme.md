

# HeroGO - Ecommerce Backend Solution

The HeroGO Ecommerce Backend Solution is a robust platform designed to facilitate various ecommerce functionalities, including product fetching, adding items to the cart, and removing items from the cart. This backend solution offers a scalable and efficient architecture to meet the requirements of small projects.



## Archicture

To ensure a well-structured and maintainable codebase, I have implemented a 3-layer architecture for this backend solution. This architectural approach, which I originally developed in 2020, optimizes the organization of code and promotes code reusability. You can find detailed information about this architecture in an article I wrote, available at the following link: Node.js Doctrine 2020.

## Note

It's important to note that my implementation primarily focuses on maintaining the user's cart data for logged-in users, considering the presence of multiple users and a database. While this may not be the ideal scenario for a logged-out user, a more optimal approach would involve utilizing a caching layer, storing cart data in localStorage, and synchronizing it with Redis instead of a database.

Although I can integrate this backend solution with the provided frontend, for the purpose of this test, I believe it's sufficient to showcase my approach and demonstrate my understanding of the required functionalities.


## Getting Started

To start using Node.js Doctrine 2023 boilerplate is very easy with these simple installation steps
- `npm install`
- Setup `.env` file as per `.env.example` and edit is per your requirement.
- `npm install` 
- `npm run dev` for development
- `npm run start` for production

## Pre-requiste

- Node.js v18.x
- Typescript
- Postgres

### Libraries

- TypeScript
- TypeDI (dependency injector)
- winston ( logging )
- celebrate (Validation)
- Prisma (ORM)
- Mocha 
- Chai (for assertion)
- Supertest

# Testing

For code coverage, I have written basic unit tests using Mocha with Chai for assertion.