import React, { FunctionComponent } from "react";

import Button from "../Button";
import deleteIcon from "../../assets/images/trash.svg";
import { ICartItem } from "src/store/slices/cartSlice";
import { removeFromCart } from "src/store/slices/cartSlice";
import Menu from "../Menu";

import { useAppDispatch, useAppSelector } from "src/store/hooks";

const Cart: FunctionComponent = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const cartItems: ICartItem[] = useAppSelector((state) => state.cart.items);
  const itemCount: number = useAppSelector((state) => state.cart.itemCount);

  const checkout = () => {};
  return (
    <Menu classList="left-1/2 z-10 w-[95%] max-w-md -translate-x-1/2 rounded-lg bg-white shadow-2xl shadow-tertiary/70 md:right-0 md:top-20 md:-translate-x-16 lg:top-28 lg:right-0 lg:w-96 lg:translate-x-56">
      <span className="border-secondary-dark-dark block border-b border-solid p-6 font-bold">
        Your shopping Cart
      </span>

      <div className={`w-full ${!itemCount ? "py-20" : "p-6"}`}>
        {!itemCount ? (
          <span className="inline-block w-full text-center font-bold text-tertiary-light">
            Your cart is empty
          </span>
        ) : (
          <div>
            {cartItems.map((item, idx) => (
              <div key={idx} className="mb-6 flex items-center gap-4">
                <img
                  src={item.product.image.src}
                  alt={item.product.title}
                  className="w-12 rounded-md"
                />

                <div className="mr-auto flex flex-col font-bold text-tertiary-dark">
                  <span>{item.product.title}</span>
                  <span className="font-normal">
                    <span className="pr-2">{item.variant.title}</span>€
                    {item.variant.price} x {item.quantity}{" "}
                    <span className="font-bold text-tertiary">
                      €{(Number(item.variant.price) * item.quantity).toFixed(2)}
                    </span>
                  </span>
                </div>

                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={() => dispatch(removeFromCart(item))}
                >
                  <img src={deleteIcon} alt="delete" />
                </button>
              </div>
            ))}

            <Button handleClick={checkout} type="primary" size="lg">
              <span>Checkout</span>
            </Button>
          </div>
        )}
      </div>
    </Menu>
  );
};

export default Cart;
