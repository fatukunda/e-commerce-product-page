import { FunctionComponent, useState, useEffect } from "react";
import Dropdown, { IOption } from "../Dropdown";

import ItemCard from "../ItemCard";

import { useAppSelector } from "src/store/hooks";
import { ISearchItem } from "src/models/SearchResult";
import Menu from "../Menu/Menu";
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
        <div className="text-center mt-36">
          <svg
            role="status"
            className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-tertiary-light fill-primary"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      )}
    </Menu>
  );
};

export default SearchResult;
