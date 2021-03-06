import { useState, useEffect } from "react";
import Button from "src/components/Button";

import plusIcon from "src/assets/images/plus.svg";
import minusIcon from "src/assets/images/minus.svg";
import { IProduct, IVariant } from "src/models/Product";
import { useAppSelector, useAppDispatch } from "src/store/hooks";
import { addToCart, ICartItem } from "src/store/slices/cartSlice";
import QrCode from "src/components/QrCode";
import { getProduct } from "src/services/productService";
import { setProduct } from "src/store/slices/productSlice";

const Product = () => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const pdct: IProduct = useAppSelector((state) => state.product.product);
  const [selectedVariant, setSelectedVariant] = useState<IVariant>(
    pdct.variants[0]
  );

  useEffect(() => {
    const fetchProduct = async () => {
      const pdct = await getProduct();
      dispatch(setProduct(pdct));
    };
    fetchProduct();
  }, [dispatch]);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addItemsToCart = () => {
    if (pdct && selectedVariant) {
      const cartItem: ICartItem = {
        product: pdct,
        variant: selectedVariant,
        quantity,
      };
      dispatch(addToCart(cartItem));
    }
  };
  const setVariant = (variant: IVariant) => {
    setSelectedVariant(variant);
  };

  const salePercent = () => {
    return (
      (100 *
        (Number(selectedVariant?.compare_at_price) -
          Number(selectedVariant?.price))) /
      Number(selectedVariant?.compare_at_price)
    ).toFixed(2);
  };

  return (
    <div className="px-6 py-4 pb-20 lg:max-w-lg">
      <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-primary lg:mb-6">
        {pdct.vendor}
      </span>

      <h1 className="mb-4 text-3xl font-bold text-tertiary md:text-4xl lg:mb-10 lg:text-5xl">
        {pdct.title}
      </h1>

      <p className="mb-6 max-w-md text-tertiary-light">{pdct.body_html}</p>
      <div className="mb-5 flex items-center justify-between md:justify-start md:gap-8 lg:mb-8 lg:flex-col lg:items-start lg:gap-2">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold"> ???{selectedVariant?.price}</span>
          <span className="rounded-md bg-secondary px-2 font-bold text-primary">
            {salePercent()}%
          </span>
        </div>
        <span className="font-bold text-tertiary-dark">
          <s>???{selectedVariant?.compare_at_price}</s>
        </span>
      </div>
      {/* Variants */}
      <div className="space-y-4 md:flex md:items-center md:gap-4 md:space-y-0">
        <div className="flex w-full items-center justify-between rounded-lg p-3 md:basis-6/12 mb-6 ">
          {pdct.variants &&
            pdct.variants.map((variant) => (
              <Button
                key={variant.id}
                title="select-variant-btn"
                type="outline"
                size="sm"
                handleClick={() => setVariant(variant)}
                classString={`${
                  variant.id === selectedVariant?.id
                    ? "border-primary"
                    : "border-gray-400"
                }`}
              >
                {variant.title}
              </Button>
            ))}
        </div>
        <div>
          <QrCode url={pdct.url} />
        </div>
      </div>
      <div className="space-y-4 md:flex md:items-center md:gap-4 md:space-y-0">
        <div className="flex w-full items-center justify-between rounded-lg bg-secondary-dark p-3 md:basis-8/12 ">
          <button
            type="button"
            onClick={decrementQuantity}
            className="p-3 transition-all duration-300 hover:opacity-50 lg:px-1"
            data-testid="decreament-quantity-btn"
          >
            <img src={minusIcon} alt="minus" />
          </button>

          <span data-testid="quantity-text" className="font-bold">
            {quantity}
          </span>

          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 transition-all duration-300 hover:opacity-50 lg:px-1"
            data-testid="increament-quantity-btn"
          >
            <img src={plusIcon} alt="plus" />
          </button>
        </div>

        <Button
          data-testid="add-to-cart-btn"
          type="primary"
          size="lg"
          handleClick={addItemsToCart}
          title="add-to-cart-btn"
        >
          <svg
            width="21"
            height="22"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-75 fill-white"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fillRule="nonzero"
            />
          </svg>
          <span>Add to cart</span>
        </Button>
      </div>
    </div>
  );
};

export default Product;
