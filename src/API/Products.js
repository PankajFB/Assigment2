import axios from "axios";

export const getProducts = () =>
  axios.get(`https://fakestoreapi.com/products`, {});

export const getProduct = (id) =>
  axios.get(`https://fakestoreapi.com/products/${id}`, {});
