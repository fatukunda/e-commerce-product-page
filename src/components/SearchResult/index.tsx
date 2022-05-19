import { FunctionComponent, useState, useEffect } from "react";
import Dropdown, { IOption } from "../Dropdown";
import Loader from "../Loader";

import ItemCard from "../ItemCard";

import { useAppSelector } from "src/store/hooks";
import { ISearchItem } from "src/models/SearchResult";
import Menu from "../Menu";
import { sort } from "src/services/searchService";
import { useAppDispatch } from "src/store/hooks";
import { setProducts, setIsSearching } from "src/store/slices/searchSlice";

const SearchResult: FunctionComponent = (): JSX.Element => {
  const searchedItems: ISearchItem[] = useAppSelector(
    (state) => state.search.items
  );
  const dispatch = useAppDispatch();
  const isSearching: boolean = useAppSelector(
    (state) => state.search.isSearching
  );
  const searchOptions: IOption[] = [
    {
      id: 1,
      name: "Random",
    },
    {
      id: 2,
      name: "Ascending",
    },
    {
      id: 3,
      name: "Descending",
    },
    {
      id: 4,
      name: "Price Low to High",
    },
    {
      id: 5,
      name: "Price High to Low",
    },
  ];
  const [selectedOption, setSelectedOption] = useState({
    id: 1,
    name: "Random",
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const selectedOptionHandler = (option: IOption) => {
    setSelectedOption(option);
    setIsMenuOpen(false);
  };
  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  };
  const toggleOpenHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const search = async () => {
      let sortOption = "";
      if (selectedOption.name === "Ascending") {
        sortOption = "asc";
      } else if (selectedOption.name === "Descending") {
        sortOption = "desc";
      } else if (selectedOption.name === "Price Low to High") {
        sortOption = "price-low-high";
      } else if (selectedOption.name === "Price High to Low") {
        sortOption = "price-high-low";
      } else {
        sortOption = "Random";
      }
      dispatch(setIsSearching(true));
      const res = await sort(sortOption);
      dispatch(setIsSearching(false));
      dispatch(setProducts(res));
    };
    search();
  }, [selectedOption, dispatch]);

  return (
    <Menu classList="h-2/3 left-1/2 z-10 w-2/3  -translate-x-1/2 rounded-lg bg-white shadow-2xl shadow-tertiary/70 md:right-0 md:top-20  lg:top-24 lg:right-0 ">
      <div className="flex border-secondary-dark-dark block border-b border-solid p-6 font-bold items-center justify-between">
        <span className="block font-bold ">Your search results</span>
        <div>
          <Dropdown
            options={searchOptions}
            selectedItem={selectedOption}
            change={selectedOptionHandler}
            close={closeMenuHandler}
            isOpen={isMenuOpen}
            toggleOpen={toggleOpenHandler}
          />
        </div>
      </div>

      {!isSearching ? (
        <div className="p-4 flex gap-2 flex-wrap justify-center">
          {searchedItems?.length ? (
            searchedItems.map((item) => <ItemCard key={item.id} item={item} />)
          ) : (
            <div className="p-4 mt-36">
              <span className="inline-block w-full text-center font-bold text-tertiary-light">
                Oh no! No result for that search
              </span>
            </div>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </Menu>
  );
};

export default SearchResult;
