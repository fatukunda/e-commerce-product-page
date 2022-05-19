import { ISearchItem } from "../models/SearchResult";

const baseUrl = process.env.REACT_APP_API_URL;
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const searchProduct = async (
  searchTerm: string,
  sortOption: string
): Promise<ISearchItem[]> => {
  const res = await fetch(
    `${baseUrl}/searchItems?title_like=${searchTerm.trim()}`,
    {
      headers,
    }
  );
  const data: ISearchItem[] = await res.json();
  return sort(data, sortOption);
};

const sort = (data: ISearchItem[], sortOption: string) => {
  let res: ISearchItem[] = data;
  switch (sortOption) {
    case "asc": {
      res = data.sort((a, b) => a.title.localeCompare(b.title));
      break;
    }
    case "desc": {
      res = data.sort((a, b) => b.title.localeCompare(a.title));
      break;
    }
    case "price-low-high": {
      res = data.sort((a, b) =>
        a.price.toString().localeCompare(b.price.toString())
      );
      break;
    }
    case "price-high-low": {
      res = data.sort((a, b) =>
        b.price.toString().localeCompare(a.price.toString())
      );
      break;
    }
  }
  return res;
};
