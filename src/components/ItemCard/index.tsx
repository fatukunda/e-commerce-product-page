import { ISearchItem } from "src/models/SearchResult";

interface IItemCardProps {
  item: ISearchItem;
}

const ItemCard = ({ item }: IItemCardProps): JSX.Element => {
  return (
    <div className="w-48 bg-white rounded-lg shadow-md dark:border-gray-700">
        <img
          className="p-8 rounded-t-lg"
          src={item.image}
          alt={item.title}
        />
      <div className="px-5 pb-5">
        <h5 className="text-xs text-tertiary-light">{item.title}</h5>

        <div className="flex justify-between items-center">
          <span className="text-l pt-2 font-bold text-gray-900">
            ${item.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
