import React, { FunctionComponent } from "react";

import ItemCard from "../ItemCard";

import { useAppSelector } from "src/store/hooks";
import { ISearchItem } from "src/models/SearchResult";

const SearchResult: FunctionComponent = (): JSX.Element => {
  const searchedItems: ISearchItem[] = useAppSelector(
    (state) => state.search.items
  );

  return (
    <div className="absolute overflow-auto top-[70px] h-2/3 left-1/2 z-10 w-2/3  -translate-x-1/2 rounded-lg bg-white shadow-2xl shadow-tertiary/70 md:right-0 md:top-20  lg:top-24 lg:right-0 ">
      <span className="border-secondary-dark-dark block border-b border-solid p-6 font-bold">
        Your search results
      </span>

      <div className="p-4 flex gap-2 flex-wrap justify-center">
        {searchedItems.length ? (
          searchedItems.map((item) => <ItemCard key={item.id} item={item} />)
        ) : (
          <div className="p-4">
            <span className="inline-block w-full text-center font-bold text-tertiary-light">
              Oh no! No result for that search
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
