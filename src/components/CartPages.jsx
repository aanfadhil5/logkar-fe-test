import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increament } from "../store/cartSlice";
import ModalReview from "./ModalReview";
import { useNavigate } from "react-router-dom";

const CartPages = () => {
  const dispatch = useDispatch();
  const router = useNavigate();
  const cart = useSelector((state) => state.cart);
  const [viewModal, setViewModal] = useState(false);
  const closeModal = useCallback(() => {
    setViewModal(false);
  }, [setViewModal]);

  return (
    <div className="min-h-screen mx-auto flex">
      {cart.length > 0 ? (
        <div className="flex flex-col mx-auto w-full gap-4 p-3">
          {cart?.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 shadow-lg bg-base-300 rounded-lg"
            >
              <figure>
                <img
                  src="https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg"
                  alt="alt"
                  height={90}
                  width={90}
                />
              </figure>
              <p className="flex flex-1 text-lg ml-3">{item.title}</p>
              <div className="flex gap-4 justify-center items-center">
                <button
                  className="btn btn-secondary"
                  disabled={item.quantity === 1}
                  onClick={() => {
                    dispatch(decrement(item));
                  }}
                >
                  -
                </button>
                <p className="text-lg">{item.quantity}</p>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    dispatch(increament(item));
                  }}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <div className="flex max-w-full items-center justify-center mt-12">
            <button
              className="btn btn-accent"
              onClick={() => {
                setViewModal(true);
              }}
            >
              Review
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-screen mx-auto flex items-center justify-center flex-col">
          <div className="max-w-md flex flex-col gap-4 px-4">
            <h1 className="text-xl">
              Maaf, keranjang belanja Anda kosong. Ayo, segera belanja
            </h1>

            <button
              className="btn btn-accent"
              onClick={() => {
                router("/store");
              }}
            >
              store
            </button>
          </div>
        </div>
      )}

      {viewModal && <ModalReview close={closeModal} />}
    </div>
  );
};

export default CartPages;
