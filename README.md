# AureoMall - Your Ultimate E-Commerce Experience
AureoMall is our first e-commerce project, designed to offer a seamless and innovative shopping experience. With a focus on quality and convenience, we're committed to redefining online retail and providing a platform that meets all your shopping needs.

## Overview

This project is a fully functional e-commerce website built with Angular 18. The website allows users to browse products, add them to their cart, and proceed to checkout. The application features modern design practices and includes various e-commerce functionalities such as product management, user authentication, and payment processing.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Generating New Components and Other Entities](#generating-new-components-and-other-entities)
- [Build](#build)
- [Running Unit Tests](#running-unit-tests)
- [Running End-to-End Tests](#running-end-to-end-tests)
- [Project Structure](#project-structure)
- [Further Help](#further-help)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license) 

## Features

- **Product Listing**: Browse a wide range of products with detailed descriptions.
- **Search Functionality**: Real-time search for products using Angular's reactive forms.
- **Product Details**: View detailed information about each product.
- **Shopping Cart**: Add products to the cart, adjust quantities, and remove items.
- **User Authentication**: Register, login, and manage user accounts.
- **Checkout Process**: Secure checkout with order summary and payment gateway integration.
- **Responsive Design**: Fully responsive for mobile and desktop views.
- **Admin Panel**: Manage products, categories, and orders through an admin interface.

## Installation

1. **Clone the repository:**
   git clone https://github.com/trienilu3000/aureo-mall.git
   cd your-repository-name
2. **Install dependencies:**
   npm install
3. **Run the development server:**
   npm run start
   ( The application will start on http://localhost:4200. )


## Generating New Components and Other Entities
To generate new components, directives, pipes, services, or other entities, use the Angular CLI commands as follows:
  1. **Generate a new component:**
    * Run `ng generate component features/product/product-list`
  2. **Generate a new directive:**
    * Run `ng generate directive shared/highlight`
  3. **Generate a new pipe:**
    * Run `ng generate pipe shared/currency-format`
  4. **Generate a new service:**
    * Run `ng generate service core/auth`
  5. **Generate a new class:**
    * Run `ng generate class shared/models/user`
  6. **Generate a new guard:**
    * Run `ng generate guard core/auth`
  7. **Generate a new interface:**
    * Run `ng generate interface shared/interfaces/product`
  8. **Generate a new enum:**
    * Run `ng generate enum shared/enums/order-status`
  9. **Generate a new module:**
    * Run `ng generate module features/product`

## Running server

Run `npm run start.dev` to run the project in a developer environment .

Run `npm run start.prod` to run the project in production.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


## Project Structure

## src/
This directory houses the core components and modules of the application.

* **app/**
  * **core/**: Contains core services and helper functions used throughout the app.
  * **shared/**: Houses reusable components, pipes, and modules shared across features.
  * **features/**: Organizes the application into feature-based modules.
    * **product/**: Handles product-related functionalities.
    * **cart/**: Manages the shopping cart.
    * **checkout/**: Handles the checkout process.
    * ...: Other feature modules
  * **assets/**: Stores static assets like images, stylesheets, and fonts.
  * **environments/**: Contains environment-specific configuration files.
  * **app.component.ts**: The root component of the application.
* **index.html**: The main HTML file.
* **main.ts**: The application's entry point.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Technologies Used

- **Angular 18**: The core framework used for building the front-end.
- **Angular Material**: For UI components and layout.
- **NgRx**: State management for maintaining the application's state.
- **RxJS**: Reactive programming library for handling asynchronous events.
- **TypeScript**: Superset of JavaScript used for application development.
- **ng-zorro-antd**: Angular UI library for a consistent and professional design.

## Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:
1. **Fork the repository.**
2. **Create a new branch (git checkout -b feature/your-feature-name).**
3. **Commit your changes (git commit -m 'Add some feature').**
4. **Push to the branch (git push origin feature/your-feature-name).**
5. **Open a pull request.**

