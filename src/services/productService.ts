import { IProduct } from "../models/Product";

const baseUrl = process.env.REACT_APP_API_URL;
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const getProduct = async (): Promise<IProduct> => {
  const data = await fetch(`${baseUrl}/product`, {
    headers,
  });
  return data.json();
};
