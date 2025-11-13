# API Documentation

## Authentication Endpoints

### POST /api/auth/register
Register a new user (artisan or buyer)

### POST /api/auth/login
Login existing user

## Product Endpoints

### GET /api/products
Get all products

### POST /api/products
Create a new product (artisan only)

### GET /api/products/:id
Get specific product

## Order Endpoints

### POST /api/orders
Create new order

### GET /api/orders/:id
Get specific order

### GET /api/orders/user/:userId
Get user's orders

## Cart Endpoints

### GET /api/cart
Get user's cart

### POST /api/cart
Add item to cart

### DELETE /api/cart/:productId
Remove item from cart