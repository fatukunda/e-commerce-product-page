import Menu from "../Menu/Menu";

export interface IOption {
  id: number;
  name: string;
}
interface IFilterProps {
  options: IOption[];
  change: Function;
  selectedItem: IOption;
  close: Function;
  isOpen: boolean;
  toggleOpen: Function;
}

const Dropdown = ({
  options,
  change,
  selectedItem,
  isOpen,
  toggleOpen,
}: IFilterProps): JSX.Element => {
  return (
    <div className="flex flex-col w-48">
      <button
        onClick={() => toggleOpen()}
        className=" flex bg-white items-center justify-between btn-sm w-48 text-xs hover:bg-gray-100 text-tertiary-light font-semibold py-2 px-4  border border-tertiary-light rounded shadow"
        data-testid="select-filter-btn"
      >
        <span>{selectedItem.name}</span>
        {isOpen ? (
          <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
            />
          </svg>
        ) : (
          <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <Menu classList="bg-white w-48 p-4 text-tertiary-light text-sm font-normal border border-tertiary-light rounded">
          <div className="grid grid-cols-1 divide-y">
            {options.map((option) => (
              <div
                onClick={() => change(option)}
                key={option.id}
                className="border-tertiary-light pb-2 pt-2 hover:bg-gray-100 cursor-pointer"
              >
                {option.name}
              </div>
            ))}
          </div>
        </Menu>
      )}
    </div>
  );
};

export default Dropdown;
