import { useEffect, useState } from "react";
import LoadingPage from "./loading/LoadingPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { addToCart, removeFromCart } from "../store/cartSlice";

const StorePages = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const selected = useSelector((state) => state.cart);

  const isSelected = (filmId) => {
    return selected.some((item) => item.episode_id === filmId);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (filmId) => {
    const index = selected.findIndex((item) => item.episode_id === filmId);
    if (index >= 0) {
      dispatch(removeFromCart(filmId));
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {products.loading ? (
        <LoadingPage />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-y-20 gap-x-14 mt-10 mb-5 p-8">
          {products.list.map((item, index) => (
            <div
              className="shadow-xl bg-base-300 rounded-xl hover:scale-105 flex flex-col duration-200 md:w-fit"
              key={item.episode_id}
            >
              <figure className="flex items-center justify-center">
                <img
                  src="https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg"
                  alt="alt"
                  className="object-cover rounded-t-xl h-fit w-full"
                />
              </figure>
              <div className="p-4 flex flex-col gap-4">
                <p className="text-lg font-semibold">{item.title}</p>
                <div className="">
                  <button
                    className="btn btn-accent w-full"
                    onClick={() =>
                      isSelected(item.episode_id)
                        ? handleRemoveFromCart(item.episode_id)
                        : handleAddToCart(item)
                    }
                  >
                    {isSelected(item.episode_id) ? "Selected" : "Add to cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default StorePages;
