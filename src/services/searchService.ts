import { ISearchItem } from "../models/SearchResult";

const baseUrl = process.env.REACT_APP_API_URL;
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const searchProduct = async (
  searchTerm: string
): Promise<ISearchItem[]> => {
  const data = await fetch(`${baseUrl}/searchItems?title_like=${searchTerm}`, {
    headers,
  });
  return data.json();
};

export const sortAlphabetically = async (): Promise<ISearchItem[]> => {
  const data = await fetch(`${baseUrl}/searchItems?_sort=title&_order=asc}`, {
    headers,
  });
  return data.json();
};

export const sortPriceLowHigh = async (): Promise<ISearchItem[]> => {
  const data = await fetch(`${baseUrl}/searchItems?_sort=price&_order=asc}`, {
    headers,
  });
  return data.json();
};

export const sortPriceHighLow = async (): Promise<ISearchItem[]> => {
  const data = await fetch(`${baseUrl}/searchItems?_sort=price&_order=desc}`, {
    headers,
  });
  return data.json();
};
