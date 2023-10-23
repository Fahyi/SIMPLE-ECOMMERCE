import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartNotif = ({ cart, setShowModal }) => {
  const [isCartOpen, setCartOpen] = useState(false);

  const productDetail = async () => {
    if (cart.length == 0) return alert("Your cart is empty!");
    setShowModal(true);
  };

  return (
    <div>
      <div>
        <div className=" translate-y-90s">
          <div className="relative">
            {cart.length > 0 && (
              <span className="left-7  absolute bg-red-500 w-6 h-6 rounded-full text-white pl-2">
                {cart.reduce((acc, curr) => acc + curr.quantity, 0)}
              </span>
            )}
          </div>
          <i
            onClick={() =>
              isCartOpen ? setCartOpen(false) : setCartOpen(true)
            }
            className="cursor-pointer"
          >
            {" "}
            <AiOutlineShoppingCart size={30} />
          </i>
          {isCartOpen && (
            <div className="absolute right-0 w-64 bg-white shadow-lg p-4 mt-2">
              <h2 className="text-lg font-semibold mb-2">Shopping Cart</h2>
              <ul className="divide-y divide-gray-200">
                {cart.length > 0 &&
                  cart.map((a) => {
                    return (
                      <div className="grid gap-4 grid-cols-2" key={a.id}>
                        <ul>{a.name}</ul>
                        <ul>Rp.{a.price}</ul>
                        <ul>{a.quantity}</ul>
                      </div>
                    );
                  })}
              </ul>
              <button
                className="bg-pink-500 hover:bg-pink-700 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={productDetail}
              >
                Continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartNotif;
