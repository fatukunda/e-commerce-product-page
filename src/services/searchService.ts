import { ISearchItem } from "../models/SearchResult";

const baseUrl = process.env.REACT_APP_API_URL;
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const searchProduct = async (
  searchTerm: string
): Promise<ISearchItem[]> => {
  const res = await fetch(`${baseUrl}/searchItems?title_like=${searchTerm}`, {
    headers,
  });
  return res.json();
};

export const sort = async (sortOption: string): Promise<ISearchItem[]> => {
  let url = `${baseUrl}/searchItems?_sort=`;
  let data = null;
  if (sortOption === "asc") {
    data = await fetch(`${url}title&_order=asc`, { headers });
  } else if (sortOption === "desc") {
    data = await fetch(`${url}title&_order=desc`, { headers });
  } else if (sortOption === "price-low-high") {
    data = await fetch(`${url}price&_order=asc`, { headers });
  } else if (sortOption === "price-high-low") {
    data = await fetch(`${url}price&_order=desc`, { headers });
  }else {
    data = await fetch(`${baseUrl}/searchItems`)
  }
  return data?.json();
};
