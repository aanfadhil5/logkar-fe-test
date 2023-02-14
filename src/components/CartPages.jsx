import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increament } from "../store/cartSlice";

const CartPages = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <>
      {cart?.map((item, index) => (
        <div
          key={index}
          className="flex justify-between p-4 border items-center"
        >
          <p>{item.title}</p>
          <div className="space-x-4">
            <button
              className="rounded border-2 border-gray-600 px-4 py-2"
              disabled={item.quantity === 1}
              onClick={() => {
                dispatch(decrement(item));
              }}
            >
              -
            </button>
            <button>{item.quantity}</button>
            <button
              className="rounded border-2 border-gray-600 px-4 py-2"
              onClick={() => {
                dispatch(increament(item));
              }}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartPages;
