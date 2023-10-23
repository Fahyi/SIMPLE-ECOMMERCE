import React, { useState, useEffect, createRef } from "react";
import { ItemList } from "./ItemList";
import { Invoice } from "./Invoice";
import CartNotif from "./CartNotif";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [costumerDetail, setCostumerDetail] = useState({
    username: "",
    phoneNumber: "",
  });
  const [item, setItem] = useState([
    {
      id: 1,
      name: "vp 114",
      status: "Online",
      price: 15000,
    },
    {
      id: 2,
      name: "vp 910",
      status: "Online",
      price: 75000,
    },
    {
      id: 3,
      name: "vp 3310",
      status: "Online",
      price: 900000,
    },
  ]);

  const addCart = (item) => {
    const itemExist = cart.find((a) => a.id == item.id);

    if (itemExist) {
      setCart((prev) =>
        prev.map((a) =>
          a.id == item.id
            ? {
                ...itemExist,
                quantity: itemExist.quantity + 1,
                price: item.price + itemExist.price,
              }
            : a
        )
      );
    } else if (item.status !== "Online") {
      alert("Out Of Stock");
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const decreaseCart = (item) => {
    const itemExist = cart.find((a) => a.id == item.id);
    if (itemExist) {
      setCart(
        cart.map((a) =>
          a.id == item.id
            ? {
                ...itemExist,
                quantity: itemExist.quantity - 1,
                price: itemExist.price - item.price,
              }
            : a
        )
      );
      setCart((prev) => prev.filter((a) => a.quantity !== 0));
    } else if (!item.length) {
      alert("you dont have any stock");
    }
  };

  return (
    <>
      <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <CartNotif cart={cart} setShowModal={setShowModal} />
      </nav>

      <ItemList item={item} addCart={addCart} decreaseCart={decreaseCart} />
      <Invoice
        costumerDetail={costumerDetail}
        setCostumerDetail={setCostumerDetail}
        showModal={showModal}
        setShowModal={setShowModal}
        setCart={setCart}
        cart={cart}
      />
    </>
  );
};

export default Cart;
