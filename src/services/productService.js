// src/services/productService.js
import { products } from "../data/products";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getProducts = (categoryId) => {
  return delay(600).then(() => {
    if (!categoryId) return products;
    return products.filter((p) => p.category === categoryId);
  });
};

export const getProductById = (itemId) => {
  return delay(600).then(() => {
    const product = products.find((p) => p.id === itemId);
    if (!product) throw new Error("Producto no encontrado");
    return product;
  });
};