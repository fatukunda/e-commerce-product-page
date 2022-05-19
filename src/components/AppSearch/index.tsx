import React, { FunctionComponent, useEffect, useState } from "react";
import { useAppDispatch } from "src/store/hooks";
import {
  setSearchActive,
  setProducts,
  setIsSearching,
} from "src/store/slices/searchSlice";
import { searchProduct } from "src/services/searchService";

const AppSearch: FunctionComponent = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let term = event.target.value;
    setSearchTerm(term);
  };
  useEffect(() => {
    if (searchTerm.length > 1) {
      dispatch(setSearchActive(true));
      const fetchItems = async () => {
        dispatch(setIsSearching(true));
        const res = await searchProduct(searchTerm);
        dispatch(setIsSearching(false));
        dispatch(setProducts(res));
      };
      fetchItems();
    } else {
      dispatch(setSearchActive(false));
    }
  }, [searchTerm, dispatch]);
  return (
    <form>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          title="search-input"
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-md text-tertiary-light bg-gray-50 rounded-lg border border-gray-300 focus:ring-0 focus:outline-none"
          placeholder="Search Products"
          value={searchTerm}
          onChange={changeHandler}
          required
        />
      </div>
    </form>
  );
};

export default AppSearch;
