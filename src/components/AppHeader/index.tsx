import React, { FunctionComponent, useState } from "react";

import logo from "../../assets/images/logo.svg";
import menuIcon from "../../assets/images/menu.svg";
import cartIcon from "../../assets/images/cart.svg";
import avatar from "../../assets/images/avatar.svg";
import closeIcon from "../../assets/images/close.svg";
import { useAppSelector } from "src/store/hooks";

import Cart from "../Cart";

export const AppHeader: FunctionComponent = (): JSX.Element => {
  const itemCount: number = useAppSelector((state) => state.cart.itemCount);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home"];
  const navItemsDisplay = navItems.map((item) => (
    <li
      key={item}
      className="lg:border-b-4 lg:border-transparent lg:py-10 lg:transition-all lg:duration-300 lg:hover:cursor-pointer lg:hover:border-b-4 lg:hover:border-primary lg:hover:text-tertiary"
    >
      {item}
    </li>
  ));
  return (
    <nav className="flex w-full items-center gap-4 bg-white px-6 py-4 lg:gap-0 lg:border-b-2 lg:border-secondary-dark lg:px-0 lg:pt-6 lg:pb-0">
      {isMenuOpen ? (
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="z-30"
          aria-label="Close"
          data-testid="menu-close-btn"
        >
          <img
            src={closeIcon}
            alt="close"
            className="mt-1.5 w-4 lg:hidden"
            data-testid="closeIcon"
          />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="z-30"
          aria-label="Hamburger"
          data-testid="menu-open-btn"
        >
          <img
            src={menuIcon}
            alt="hamburger"
            className="mt-1.5 w-4 lg:hidden"
          />
        </button>
      )}

      {isMenuOpen && (
        <div className="absolute top-0 left-0 z-20 min-h-full w-full bg-black/70">
          <ul className="absolute top-0 left-0 min-h-full w-8/12 space-y-4 bg-white p-7 pt-20 text-lg font-bold md:w-1/3">
            {navItemsDisplay}
          </ul>
        </div>
      )}

      <img src={logo} alt="nu3" className="mr-auto md:mx-0" />

      <div className="mr-auto lg:ml-12">
        <ul className="hidden  text-tertiary-light lg:flex lg:gap-6">
          {navItemsDisplay}
        </ul>
      </div>

      <div className="flex items-center gap-4 lg:gap-8">
        <div className="relative">
          <button
            data-testid="cart-open-btn"
            type="button"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <img src={cartIcon} alt="cart" className="w-6" />
          </button>

          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1.5 inline-block rounded-full bg-primary px-2 text-center text-[8px] text-white">
              {itemCount}
            </span>
          )}
        </div>

        <img
          src={avatar}
          alt="avatar"
          className="w-6 rounded-full hover:cursor-pointer hover:outline hover:outline-1 hover:outline-primary md:w-8 lg:w-10"
        />
      </div>

      {isCartOpen && <Cart />}
    </nav>
  );
};

export default AppHeader;
